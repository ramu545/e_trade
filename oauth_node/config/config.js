const clientId = "577028630515-lfppggf3c9fafnjvfatsmvflq0t7pee2.apps.googleusercontent.com";
const clientSecretekey = "UcrbXfngNdh1z-6GSOZKCQQ6";
const port = 3030;
const host = "127.0.0.1";
const dburl = "mongodb://ds139775.mlab.com:39775/trends";
const dbAuth = "trends";
const dbuser = "trends121";
const dbpass = "trends121";
const SECRETKEY = "secreate"

module.exports = {
    port : port,
    host : host,
    dburl : dburl,
    dbAuth : dbAuth,
    dbuser : dbuser,
    dbpass: dbpass,
    SECRETKEY:SECRETKEY,

    facebookAuth : {
        clientID      : 'your-secret-clientID-here', // your App ID
        clientSecret  : 'your-client-secret-here', // your App Secret
        callbackURL   : 'http://localhost:8080/auth/facebook/callback'
    },

    twitterAuth : {
        consumerKey       : 'your-consumer-key-here',
        consumerSecret    : 'your-client-secret-here',
        callbackURL       : 'http://localhost:8080/auth/twitter/callback'
    },

    googleAuth : {
        clientID      : clientId,
        clientSecret  : clientSecretekey,
        callbackURL   : 'http://localhost:3030/auth/google/callback'
    }
}
