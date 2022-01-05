import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import express from 'express';
import session from 'express-session'
import passport from 'passport';
import GoogleStrategy from 'passport-google-oidc';

import sqlRouter from './routes/sql.js'
import sqlController from './controllers/sqlcontroller.js'
import authRoutes from './routes/auth-routes.js';


import passportSetup from './passport-setup.js'
passportSetup();


const app = express();

const PORT = 3000;

//will parse all json
app.use(express.json());
//will break down queries in the requested URL.
//extended true (default value, but need to declare) uses the express qs library which allows nested objects to be passed as queries.
//exnteded false uses queryString library which is a simpler solution for basic usage
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static(path.resolve(__dirname, '../client')));

//need express sessions. Must look this up.
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false, cookie: { maxAge: 60000 }}))

//add passport initialize and sessions
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

//TEST ROUTE FOR EXPRESS SESSIONS. EXPRESS SESSIONS REQUIRED FOR PASSPORT SESSIONS
app.get('/test', function(req, res, next) {
  // if the session exists, it should have req.session.views.
  if (req.session.views) {
    //increments views
    req.session.views++
    // set headers and writes to client the number of views and when the cookie will expire. 
    // Since the cookie's maxAge is set when the user refreshes, it is always 60s.
    // Once the cookie times out, it clears the session
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires on: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
    //if first time or the cookie is expired, it goes here!
    // session will send a cookie with a specific connect.sid per user? (i think, must verify) with the expiration time
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

//start writing route handlers here
app.use('/sql', sqlRouter);




//passport doesn't seem to be able to be put into routers or controllers
app.get('/auth/google', passport.authenticate('google', {scope: ['openid', 'profile', 'email']}), (req,res) => {
  res.status(200).send('logged in')
});

app.get('/auth/google/callback', passport.authenticate('google'),

  // { failureRedirect: '/login', failureMessage: true }),
  // function(req, res) {
  //   res.redirect('/');
  // }
  (req, res) => {
    //store the user data into the passport session data
    req.session.userID = req.session.passport.user;
    console.log(req.session.passport.user);

    //redirect to sql
    res.status(200).redirect('/sql');
  }
);


// catch-all route handler for any requests to an unknown route
app.use('/:address', (req, res) => {
  console.log(req.params.address);
  res.status(404).send(`Nothing here at the catchall of ${req.params.address}`)
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
  
//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
  
export default app;
  