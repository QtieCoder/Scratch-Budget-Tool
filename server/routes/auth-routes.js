import express from 'express';
const router = express.Router();

//this will be run before any of the others
router.use((req, res, next) => {
    console.log(`  using passportRouter`);
    next();
})

//authenticate login
router.get('/login', (req, res,) => {
    console.log('/login');
    res.status(200).send('/login');
    // res.status(200).render('login');

})

//authenticate logout
router.get('/logout', (req, res)=> { 
    console.log('/logout');
    res.status(200).send('logging out');
})

//authenticate with google

// router.get('/auth/google', passport.authenticate('google', {scope: ['profile']}), (req, res)=> { 
//     res.send('logging in with google');
// })

// router.get('/google', passportController.auth, (req, res)=> { 
//     res.status(200).send('logging in with google');
// })

// router.get('/google/callback', passportController.auth,

  // { failureRedirect: '/login', failureMessage: true }),
  // function(req, res) {
  //   res.redirect('/');
  // }
//   (req, res) => {
//     console.log('gets redirect');
//     res.status(200).send('redirect back after auth');
//   }
//   );

export default router;