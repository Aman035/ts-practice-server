import { RequestHandler } from 'express'
import { MetadataKeys } from './MetadataKeys'
import { Method } from './Methods'

/**
 * MODIFY PROPERTY_DESCRIPTOR TO THROW ERROR WHEN INVALID FUNCTIONS PASSED ( WE WANT ON EXPRESSS REQUESTHANDLERS TO BE PASSED )
 */
interface RequestHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

const routeBinder = (method: string) => {
  // Returns Anon Decorator Factory
  return (path: string) => {
    // Returns Anon Function Decorator
    return (target: any, key: string, desc?: RequestHandlerDescriptor) => {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key)
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key)
    }
  }
}

/**
 * Factory Decorators for Each Type of Request
 */
export const get = routeBinder(Method.GET)
export const post = routeBinder(Method.POST)
export const put = routeBinder(Method.PUT)
export const del = routeBinder(Method.DELETE)
export const patch = routeBinder(Method.PATCH)
