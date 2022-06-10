"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.net = exports.isHttpFailureResponse = exports.isHttpSuccessResponse = void 0;
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const axios_1 = __importDefault(require("axios"));
const logging_1 = require("../logging");
const types_1 = require("../types");
function isHttpSuccessResponse(obj) {
    if (typeof (obj) === 'object' && obj !== null && obj.hasOwnProperty('success')) {
        return obj.success;
    }
    return false;
}
exports.isHttpSuccessResponse = isHttpSuccessResponse;
function isHttpFailureResponse(obj) {
    return !isHttpSuccessResponse(obj);
}
exports.isHttpFailureResponse = isHttpFailureResponse;
// Global configuration.
const config = {
    sites: {}
};
/**
 * Update network configuration for the sites and variables given as an object.
 * @param conf
 */
function configure(conf) {
    if (conf.baseUrl) {
        config.baseUrl = conf.baseUrl;
    }
    if (conf.sites) {
        for (const site of Object.keys(conf.sites)) {
            if (!config.sites) {
                config.sites = {};
            }
            if (!config.sites[site]) {
                config.sites[site] = {};
            }
            Object.assign(config.sites[site], conf.sites[site]);
        }
    }
}
/**
 * Get the configuration variable for the site URL.
 * @param url
 * @param name
 * @returns
 */
const getConf = (url, name) => {
    const origin = new URL(url).origin;
    if (config.sites && config.sites[origin] && name in config.sites[origin]) {
        return config.sites[origin][name];
    }
    return null;
};
/**
 * Set the configuration variable for the site URL.
 * @param url
 * @param name
 * @param value
 */
const setConf = (url, name, value) => {
    const origin = new URL(url).origin;
    if (!config.sites) {
        config.sites = {};
    }
    if (!config.sites[origin]) {
        config.sites[origin] = {};
    }
    config.sites[origin][name] = value;
};
// Helper to create full url from local url if needed.
const constructUrl = (url) => {
    if ((0, types_1.isLocalUrl)(url)) {
        if (!config.baseUrl) {
            throw new Error(`Cannot use local URL '${url}' when there is no base URL configured.`);
        }
        return config.baseUrl.replace(/\/$/, '') + '/' + url.replace(/^\//, '');
    }
    return url;
};
// Helper to refresh token.
async function refreshToken(url) {
    setConf(url, 'token', null);
    if (getConf(url, 'refreshToken') && getConf(url, 'refreshUrl')) {
        const refreshUrl = `${new URL(url).origin}${getConf(url, 'refreshUrl')}`;
        (0, logging_1.log)(`Refreshing token from ${refreshUrl}.`);
        const headers = {
            Authorization: `Bearer ${getConf(url, 'refreshToken')}`,
        };
        if (getConf(url, 'uuid')) {
            headers['X-UUID'] = getConf(url, 'uuid');
        }
        const refreshed = await (0, axios_1.default)({
            method: 'GET',
            url: refreshUrl,
            headers
        }).catch(err => {
            const logout = getConf(url, 'logout');
            if (logout) {
                logout();
                return false;
            }
            (0, logging_1.error)(`Fetching token for ${url} failed: ${err}`);
            return err;
        });
        if (refreshed.status === 200 && refreshed.data && refreshed.data.token) {
            setConf(url, 'token', refreshed.data.token);
            if (refreshed.data.refresh) {
                setConf(url, 'refreshToken', refreshed.data.refresh);
            }
            (0, logging_1.log)(`Received new token from ${url}.`);
            return true;
        }
        const logout = getConf(url, 'logout');
        if (logout) {
            logout();
            return false;
        }
        (0, logging_1.error)('Invalid response:', refreshed);
        return new Error('Unable to understand token response.');
    }
    return new Error(`Site ${url} not configured for token refreshing.`);
}
/**
 * Construct a function for handling one particular method of HTTP requests.
 * @param method HTTP method.
 * @returns
 */
function createRequestHandler(method) {
    return async (url0, data, extraHeaders) => {
        // Calculate URL and origin.
        const url = constructUrl(url0);
        const origin = new URL(url).origin;
        if (!config.sites || !config.sites[origin]) {
            (0, logging_1.warning)(`We don't have any net configuration for site ${origin}.`);
        }
        // Helper to perform actual request.
        async function doRequest({ method, url, data }) {
            const headers = {};
            Object.assign(headers, extraHeaders);
            if (config.sites && config.sites[origin] && !headers.Authorization) {
                if (getConf(url, 'token')) {
                    headers.Authorization = `Bearer ${getConf(url, 'token')}`;
                }
                if (getConf(url, 'uuid')) {
                    headers['X-UUID'] = getConf(url, 'uuid');
                }
            }
            // Construct a call object.
            const axiosCall = { method, url, data, headers };
            if (method === 'GET') {
                if (data) {
                    axiosCall.params = data;
                }
            }
            if (data === null || data === undefined) {
                delete axiosCall.data;
            }
            // Instanceof operator does not work reliably with FormData, so let us use some heuristics to recognize form data.
            const isFormData = data && data instanceof Object && data.constructor && data.constructor.name === 'FormData';
            if (isFormData && data.getHeaders) {
                Object.assign(headers, data.getHeaders());
            }
            // Execute the call.
            const resp = await (0, axios_1.default)(axiosCall).catch(err => {
                if (err.response) {
                    return err.response;
                }
                const message = `Network call failed: ${err}.`;
                (0, logging_1.error)(message);
                return {
                    status: -1,
                    success: false,
                    data: {
                        message
                    }
                };
            });
            (0, logging_1.note)('Net:', method, url, 'HTTP', resp.status);
            let defaultMessage;
            switch (resp.status) {
                case -1:
                    return resp;
                case 200:
                    return {
                        status: 200,
                        success: true,
                        data: resp.data
                    };
                case 204:
                    return {
                        status: 204,
                        success: true,
                        data: true
                    };
                case 400:
                    defaultMessage = 'Bad Request';
                case 401:
                    defaultMessage = defaultMessage || 'Unauthorized';
                case 403:
                    defaultMessage = defaultMessage || 'Forbidden';
                case 404:
                    defaultMessage = defaultMessage || 'Not Found';
                case 500:
                    defaultMessage = defaultMessage || 'Internal Server Error';
                    (0, logging_1.error)(`A call ${method} ${url} failed with ${resp.status}. Data:`);
                    (0, logging_1.error)(resp.data);
                    return {
                        status: resp.status,
                        success: false,
                        message: resp.data && resp.data.message ? resp.data.message : defaultMessage
                    };
                default:
                    (0, logging_1.warning)(`Net: No handler for HTTP ${resp.status}.`);
                    throw new Error(`Net library has no handler yet for status ${resp.status}.`);
            }
        }
        // Helper to process error situation.
        async function handleError(err) {
            let status = 500;
            // Let us see what we can do for the error.
            if (err.response)
                switch (err.response.status) {
                    case 401:
                    case 403:
                        status = err.response.status;
                        if (getConf(url, 'refreshToken') && getConf(url, 'refreshUrl')) {
                            (0, logging_1.warning)(`Request ${method} ${url} gave ${err.response.status} but trying to refresh the token.`);
                            err = await refreshToken(url);
                            if (err === true) {
                                let success = true;
                                const retried = await doRequest({ method, url, data }).catch(newErr => {
                                    (0, logging_1.warning)(`We got token but retrying ${method} ${url} failed as well. Error was:`);
                                    (0, logging_1.error)(newErr);
                                    err = newErr;
                                    status = 500;
                                    success = false;
                                });
                                if (success) {
                                    (0, logging_1.log)(`Retrying ${method} ${url} successful.`);
                                    return retried;
                                }
                            }
                        }
                        break;
                }
            // Nothing to do. Give up.
            let reason = '';
            if (err.response && err.response.data) {
                reason = ` (${err.response.data.message})`;
            }
            (0, logging_1.error)(`Request ${method} ${url} failed: ${JSON.stringify(err)}${JSON.stringify(reason)}`);
            return {
                status,
                success: false,
                message: `Request ${method} ${url} failed.`
            };
        }
        // Check if we have refresh token but no actual token or token has expired.
        const token = getConf(url, 'token');
        const hasRefreshToken = !!getConf(url, 'refreshToken');
        let needRefresh = hasRefreshToken && !token;
        if (token) {
            try {
                const decoded = (0, jwt_decode_1.default)(token);
                const expires = decoded.exp * 1000;
                const now = new Date().getTime();
                if (expires - now < 1000) {
                    (0, logging_1.log)('Token has been expired.');
                    needRefresh = true;
                }
            }
            catch (err) { }
        }
        if (needRefresh) {
            (0, logging_1.log)('Token needs refreshing.');
            const err = await refreshToken(url);
            if (err !== true) {
                (0, logging_1.error)(`Trying to refresh token gave an error: ${err}`);
            }
        }
        // Finally the actual processing start here.
        const finalResult = await doRequest({ method, url, data }).catch(err => {
            return handleError(err);
        });
        if (!finalResult.success) {
            if (finalResult.status === 403 || finalResult.status === 401) {
                // Check if we can still fix the problem.
                return handleError({ response: finalResult });
            }
        }
        return finalResult;
    };
}
/**
 * Refresh the token for the given site.
 * @param url
 */
async function refresh(url) {
    const result = await refreshToken(url);
    if (result === true) {
        return {
            token: getConf(url, 'token'),
            refresh: getConf(url, 'refreshToken')
        };
    }
    (0, logging_1.error)(`Token refresh for ${url} failed:`, result);
    return null;
}
exports.net = {
    configure,
    getConf,
    setConf,
    refresh,
    DELETE: createRequestHandler('DELETE'),
    GET: createRequestHandler('GET'),
    HEAD: createRequestHandler('HEAD'),
    PATCH: createRequestHandler('PATCH'),
    POST: createRequestHandler('POST'),
    PUT: createRequestHandler('PUT')
};
//# sourceMappingURL=net.js.map