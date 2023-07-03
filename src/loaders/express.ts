import bodyParser from 'body-parser'
import express from 'express'
import { routes } from '../routes'
// Initialize
const app = express()
// Use Body Pareser
app.use(bodyParser.urlencoded({ extended: true }))
// Use all the specified routes
routes(app)
export { app }
