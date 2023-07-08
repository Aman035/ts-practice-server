import { Request, Response, NextFunction, RequestHandler } from 'express'
import { AppRouter } from '../../AppRouter'
import { MetadataKeys } from './MetadataKeys'
import { Method } from './Methods'

const reqBodyValidator = (keys: string[]): RequestHandler => {
  // Returns a validation middleware
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      res.status(422).send('Invalid request')
      return
    }
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`)
        return
      }
    }
    next()
  }
}

export const controller = (routePrefix: string) => {
  // Return Factory class Decorator
  // Note - Class Decorators run after all the other decorators such as method, param, property
  return (target: Function) => {
    const router = AppRouter.getInstance()
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key)
      const method: Method = Reflect.getMetadata(
        MetadataKeys.METHOD,
        target.prototype,
        key
      )
      const middlewares =
        Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) ||
        []
      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) || []

      const validator = reqBodyValidator(requiredBodyProps)
      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        )
      }
    })
  }
}
