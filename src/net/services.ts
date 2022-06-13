import { Url } from '../types'
import { HttpExtraHeaders, HttpMethod, HttpResponse, net } from './net'

global.CONFIG = {
  API: {
    url: ''
  },
  ERP_API: {
    url: ''
  }
}

/**
 * Name of the REST services used in Tasenor.
 */
export type ServiceName = 'ERP_API' | 'API'

/**
 * A type for service REST call return value.
 */
export type ServiceResponse = Promise<HttpResponse>

/**
 * Defintion of the payload used in service calls.
 */
// eslint-disable-next-line
export type ServiceData = Record<string, any> | null

/**
 * A definition for function handling a service call.
 */
export type ServiceCallFunction = (method: HttpMethod, url: string, data?: ServiceData, headers?: HttpExtraHeaders) => ServiceResponse

/**
 * Service public API definition.
 */
export interface ServiceDefinition {
  call: ServiceCallFunction
}

/**
 * Configuration for a service.
 */
export interface ServiceConfig {
  url: string,
}

// Helper to build service access.
function makeService(env: string): ServiceDefinition {
  return {
    call: async (method: HttpMethod, url: string, data: ServiceData, headers: HttpExtraHeaders = {}): ServiceResponse => {
      if (!global.CONFIG[env]) {
        throw new Error(`Service configuration variable ${env} is not set and related service is unusable.`)
      }
      if (!global.CONFIG[env].url) {
        throw new Error(`Service configuration URL for ${env} is not set and related service is unusable.`)
      }
      if ('Authorization' in headers && !headers.Authorization) {
        throw new Error(`Invalid Authorization header for ${env} call.`)
      }
      url = `${global.CONFIG[env].url}${url}`
      return net[method](url as Url, data, headers)
    }
  }
}

/**
 * Configure the URL for the service.
 * @param name
 * @param url
 */
export function setServiceUrl(name: ServiceName, url: string): void {
  if (global.CONFIG && global.CONFIG[name]) {
    global.CONFIG[name].url = url
  } else {
    throw new Error(`A service ${name} does not exist.`)
  }
}

export const ERP_API = makeService('ERP_API')
export const API = makeService('API')
