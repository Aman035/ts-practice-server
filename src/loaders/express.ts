import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import express from 'express'
import { AppRouter } from '../AppRouter'
// Initialize Express App
const app = express()
// Use Body Pareser
app.use(bodyParser.urlencoded({ extended: true }))
// use cookiesession
app.use(cookieSession({ keys: ['cookieSession'] }))
// use Singleton Router
app.use(AppRouter.getInstance())
export { app }
