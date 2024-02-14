import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).json({ error: 'notpermitted' });
  // res.send('Notetete');
  // return res.redirect('/login');
}
const router = Router();

router.get('/', (req, res) => {
  if (req.session && req.session.loggedIn) {
    res.send(
      `<div>
        <div> You are Logged In </div>
        <a href ="/logout">logout</a>
      </div>
      `
    );
  } else {
    res.send(
      `<div>
        <div> You are not Logged In </div>
        <a href ="/login">login</a>
      </div>
      `
    );
  }
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div> 
        <label> Email </label>
        <input name="email"/>
      </div>
      <div>
        <label> Password </label>
        <input name="password" type="password"/>
      </div>
      <button>Submit </button>
    </form>
  `);
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (
    email &&
    password &&
    email === 'hi@tiktok.com' &&
    password === 'password'
  ) {
    req.session = { loggedIn: true };
    res.redirect('/');
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('welcome to protecred path');
});

export { router };
