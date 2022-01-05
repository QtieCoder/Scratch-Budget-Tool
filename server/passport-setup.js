import query from './models/sql.js'
import passport from 'passport';
import GoogleStrategy from 'passport-google-oidc';

import * as dotenv from 'dotenv'
dotenv.config()


const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.serializeUser((userID, done) => {
    done(null, userID);
});

passport.deserializeUser((userID, done) => {
    //find user then
    done(null, userID);
});

// this sets up passport to use google
const passportSetup = () => {
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    // this is the callback AFTER THE SECOND invokation of authenticate. 
    // authenticate is run once when you use google login, then again when it is redirected back to the authorized page
    // Once authenticate is invoked again, it goes here.
    // this should be async because it has the queries inside of it. If not async, it will run past and not wait for query
    // causing MASSIVE headaches. MASSIVE. HEADACHES.
    async (issuer, profile, done) => {
        console.log('    Running passport verify function')
        // console.log(profile);

        //set all the variables that should be inside the user object from google oauth
        const googleID = profile.id;
        const name = profile.displayName;

        //getting the sqlID ready
        let sqlID = 0;

        //find the userID in sql, if it exists, then store sqlID. It must wait for this query
        await query(`SELECT * FROM users WHERE oauthkey='${String(googleID)}';`)
        .then((queryData) => {
            //crap out if too many users
            if (queryData.rows.length > 1) {
                console.log('Too many instances of same user');
            }
            //if found, "done" it
            else if (queryData.rows.length === 1) {
                console.log('    Found instance of user.');
                sqlID = queryData.rows[0]._id;
                //creates the user object to pass back to the session
                const user = {
                    "sqlID": sqlID,
                    "name": name,
                    "Google ID":googleID
                }

                //same as return, except it sends back user into req.session.passport
                done(null, user);
                
            }
            
            //else create
            else {
                console.log(`    Didn't find ${name}. Inserting into users table`)
                //if it doesn't exist, create new sql user with the name and google ID.
                query(`INSERT INTO users (name, oauthkey) VALUES ('${name}', '${String(googleID)}');`)
                .then(query => {
                    console.log(`    Created user ${name}`);
                })
                //select user after it's created
                .then(async () => {
                    await query(`SELECT * FROM users WHERE oauthkey='${String(googleID)}';`)
                    .then(query => {
                        // console.log(query)
                        sqlID = query.rows[0]._id;
                        const user = {
                            "sqlID": sqlID,
                            "name": name,
                            "Google ID":googleID
                        }
                        done(null, user);
                    })
                })
                .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
    }));
}

// accessToken, refreshToken, profile, done

export default passportSetup