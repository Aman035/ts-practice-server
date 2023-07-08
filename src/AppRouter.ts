import express from 'express'

/**
 * Goal - To create and initialize a single Express Router
 */
export class AppRouter {
  private static instance: express.Router

  static getInstance = (): express.Router => {
    if (!this.instance) {
      this.instance = express.Router()
    }
    return this.instance
  }
}
