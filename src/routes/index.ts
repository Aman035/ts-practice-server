import { Express } from 'express'
import { router as homeRouter } from './home'
import { router as loginRouter } from './auth'
import { router as protectedRouter } from './protected'
export const routes = (app: Express) => {
  app.use(homeRouter)
  app.use(loginRouter)
  app.use(protectedRouter)
}
