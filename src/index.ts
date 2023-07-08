import 'reflect-metadata' // enable decorators
import './controllers' // initializing classes with decorators

import { app } from './loaders/express'
app.listen(3000, () => {
  console.log('Listening on Port 3000')
})
