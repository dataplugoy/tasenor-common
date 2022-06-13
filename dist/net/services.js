"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = exports.ERP_API = exports.setServiceUrl = void 0;
const net_1 = require("./net");
/**
 * Configurable service addresses.
 */
const CONFIG = {
    API: {
        url: ''
    },
    ERP_API: {
        url: ''
    }
};
// Helper to build service access.
function makeService(env) {
    return {
        call: async (method, url, data, headers = {}) => {
            if (!CONFIG[env]) {
                throw new Error(`Service configuration variable ${env} is not set and related service is unusable.`);
            }
            if (!CONFIG[env].url) {
                throw new Error(`Service configuration URL for ${env} is not set and related service is unusable.`);
            }
            if ('Authorization' in headers && !headers.Authorization) {
                throw new Error(`Invalid Authorization header for ${env} call.`);
            }
            url = `${CONFIG[env].url}${url}`;
            return net_1.net[method](url, data, headers);
        }
    };
}
/**
 * Configure the URL for the service.
 * @param name
 * @param url
 */
function setServiceUrl(name, url) {
    if (name in CONFIG) {
        CONFIG[name].url = url;
    }
    else {
        throw new Error(`A service ${name} does not exist.`);
    }
}
exports.setServiceUrl = setServiceUrl;
exports.ERP_API = makeService('ERP_API');
exports.API = makeService('API');
//# sourceMappingURL=services.js.map