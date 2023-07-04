import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import express from 'express'
import { routes } from '../routes'
// Initialize
const app = express()
// Use Body Pareser
app.use(bodyParser.urlencoded({ extended: true }))
// use cookiesession
app.use(cookieSession({ keys: ['cookieSession'] }))
// Use all the specified routes
routes(app)
export { app }
