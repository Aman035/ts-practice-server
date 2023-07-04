import Router, { Request, Response, NextFunction } from 'express'
const router = Router()
const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next()
    return
  }
  res.status(403)
  res.send('Not permitted')
}
router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user')
})
export { router }
