import { Request, Response } from 'express'
import { get, controller, post } from './decorators'
import { bodyValidator } from './decorators/bodyValidator'

@controller('/auth')
class LoginController {
  /**
   * TO THROW ERROR WHEN INVALID FUNCTIONS PASSED ( WE WANT ON EXPRESSS REQUESTHANDLERS TO BE PASSED )
   */
  // @get('/')
  // add(a: number, b: number) {
  //   return a+b;
  // }

  @get('/login')
  // Can't use arrow fns as they r interpretated as property, so decorators with the property decorators and not method decorators
  getLogin(req: Request, res: Response): void {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')()
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body
    if (email === '1@2.com' && password === 'pass') {
      req.session = { loggedIn: true }
      res.redirect('/')
    } else {
      res.send('Invalid email or password')
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/')
  }
}
