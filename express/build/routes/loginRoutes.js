"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.session && req.session.loggedIn) {
            next();
            return;
        }
        res.status(403).json({ error: 'notpermitted' });
        // res.send('Notetete');
        // return res.redirect('/login');
    });
}
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`<div>
        <div> You are Logged In </div>
        <a href ="/logout">logout</a>
      </div>
      `);
    }
    else {
        res.send(`<div>
        <div> You are not Logged In </div>
        <a href ="/login">login</a>
      </div>
      `);
    }
});
router.get('/login', (req, res) => {
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
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        email === 'hi@tiktok.com' &&
        password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('welcome to protecred path');
});
