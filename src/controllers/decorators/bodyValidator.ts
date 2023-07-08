import { MetadataKeys } from './MetadataKeys'

/**
 * Factory Decorator
 * To specify keys to be validated in request body
 * @param keys
 * @returns
 */
export const bodyValidator = (...keys: string[]) => {
  // Returns Factory Decorator
  return () => {
    return (target: any, key: string, desc?: PropertyDescriptor) => {
      Reflect.defineMetadata(MetadataKeys.VALIDATOR, keys, target, key)
    }
  }
}
