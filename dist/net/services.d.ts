import { HttpExtraHeaders, HttpMethod, HttpResponse } from './net';
/**
 * Name of the REST services used in Tasenor.
 */
export declare type ServiceName = 'ERP_API' | 'API';
/**
 * A type for service REST call return value.
 */
export declare type ServiceResponse = Promise<HttpResponse>;
/**
 * Defintion of the payload used in service calls.
 */
export declare type ServiceData = Record<string, any> | null;
/**
 * A definition for function handling a service call.
 */
export declare type ServiceCallFunction = (method: HttpMethod, url: string, data?: ServiceData, headers?: HttpExtraHeaders) => ServiceResponse;
/**
 * Service public API definition.
 */
export interface ServiceDefinition {
    call: ServiceCallFunction;
}
/**
 * Configuration for a service.
 */
export interface ServiceConfig {
    url: string;
}
/**
 * Configure the URL for the service.
 * @param name
 * @param url
 */
export declare function setServiceUrl(name: ServiceName, url: string): void;
export declare const ERP_API: ServiceDefinition;
export declare const API: ServiceDefinition;
