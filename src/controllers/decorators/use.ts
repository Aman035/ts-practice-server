import { RequestHandler } from 'express'
import { MetadataKeys } from './MetadataKeys'
/**
 * Factory Decorator
 * To attach middleward to a route fn
 * @param middleware
 * @returns
 */
// Factory Decorator
export const use = (middleware: RequestHandler) => {
  // Anon Fn Decorator
  return () => {
    return (target: any, key: string, desc?: PropertyDescriptor) => {
      // get all attached middlewares
      const middlewares =
        Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target, key) || []
      // add the middleware to the attached middlewares list
      Reflect.defineMetadata(
        MetadataKeys.MIDDLEWARE,
        [...middlewares, middleware],
        target,
        key
      )
    }
  }
}
