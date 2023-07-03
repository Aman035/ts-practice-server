import { Express } from 'express'
import { router as loginRouter } from './login'
export const routes = (app: Express) => {
  app.use(loginRouter)
}
