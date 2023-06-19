import FormData from 'form-data';
import { LocalUrl, Token, TokenPair, Url, UUID, Value } from '../types';
/**
 * HTTP methods in use on the system.
 */
export type HttpMethod = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH' | 'HEAD';
/**
 * Status codes used in the system.
 */
export type SupportedSuccessStatus = 200 | 204;
export type SupportedFailStatus = 400 | 401 | 403 | 404 | 500;
export type SupportedStatus = SupportedSuccessStatus | SupportedFailStatus;
/**
 * A response content format for successfull REST call.
 */
export interface HttpSuccessResponse<T = Value> {
    status: SupportedSuccessStatus;
    success: true;
    data?: T;
}
export declare function isHttpSuccessResponse(obj: unknown): obj is HttpSuccessResponse;
/**
 * A response content format for unsuccessfull REST call.
 */
export interface HttpFailureResponse {
    status: SupportedFailStatus;
    success: false;
    message: string;
}
export declare function isHttpFailureResponse(obj: unknown): obj is HttpFailureResponse;
/**
 * A HTTP response content format for REST call.
 */
export type HttpResponse<T = Value> = HttpSuccessResponse<T> | HttpFailureResponse;
/**
 * Internal configuration interface for keeping token and refresh information per sites.
 */
export interface NetConfig {
    baseUrl?: Url;
    sites?: {
        [siteUrl: string]: {
            uuid?: UUID;
            refreshUrl?: LocalUrl;
            token?: Token;
            refreshToken?: Token;
        };
    };
}
/**
 * Update network configuration for the sites and variables given as an object.
 * @param conf
 */
declare function configure(conf: NetConfig): void;
/**
 * Additional headers used in the system.
 */
export interface HttpExtraHeaders {
    Accept?: string;
    'Content-Type'?: string;
    Authorization?: string;
    'X-UUID'?: UUID;
}
/**
 * A type of a function that performs a REST call.
 */
export type HttpRequestFunction = (url: LocalUrl | Url, data?: Value | FormData, extraHeaders?: HttpExtraHeaders) => Promise<HttpResponse>;
/**
 * Refresh the token for the given site.
 * @param url
 */
declare function refresh(url: Url): Promise<null | TokenPair>;
export declare const net: {
    configure: typeof configure;
    getConf: (url: Url, name: string) => Value | (() => void);
    setConf: (url: Url, name: string, value: Value | (() => void)) => void;
    refresh: typeof refresh;
    DELETE: HttpRequestFunction;
    GET: HttpRequestFunction;
    HEAD: HttpRequestFunction;
    PATCH: HttpRequestFunction;
    POST: HttpRequestFunction;
    PUT: HttpRequestFunction;
};
export {};
