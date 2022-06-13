"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = exports.ERP_API = exports.setServiceUrl = void 0;
const net_1 = require("./net");
global.CONFIG = {
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
            if (!global.CONFIG[env]) {
                throw new Error(`Service configuration variable ${env} is not set and related service is unusable.`);
            }
            if (!global.CONFIG[env].url) {
                throw new Error(`Service configuration URL for ${env} is not set and related service is unusable.`);
            }
            if ('Authorization' in headers && !headers.Authorization) {
                throw new Error(`Invalid Authorization header for ${env} call.`);
            }
            url = `${global.CONFIG[env].url}${url}`;
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
    if (global.CONFIG && global.CONFIG[name]) {
        global.CONFIG[name].url = url;
    }
    else {
        throw new Error(`A service ${name} does not exist.`);
    }
}
exports.setServiceUrl = setServiceUrl;
exports.ERP_API = makeService('ERP_API');
exports.API = makeService('API');
//# sourceMappingURL=services.js.map