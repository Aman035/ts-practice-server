import { Router, Request, Response } from 'express'

interface CustomRequest extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router()
router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email" />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password" />
        </div>
        <button>Submit</button>
    </form>
    `)
})
router.post('/login', (req: CustomRequest, res: Response) => {
  const { email, password } = req.body
  if (email === '1@2.com' && password === 'pass') {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else {
    res.send('Invalid email or password')
  }
})
router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})
export { router }
