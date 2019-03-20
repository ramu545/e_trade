require('./users.model');
require('./products.mode');
const mongoose = require('mongoose');
const CONFIG = require('../models/config');
const options = {
    useNewUrlParser: true
}
//mongoose.connect(CONFIG.dburl,options);
mongoose.connect(CONFIG.dburl,options );

const conection = mongoose.connection
conection.once('open',()=>{
  console.log(`mongodb Connected successfully withmongoose ..!`);
});

conection.on('error',()=>{
    console.log(`mongoDB Conectionfaild withmongoose..?`);
});

process.once('SIGUSR2', function() {
  gracefullShutdown(' nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2')
  });
});
 //SIGINT is for terminating the process
 //The default behavior is to terminate the process, 
 //but it can be caught or ignored.it's for graceful shutdown(<Ctrl>+C)
process.on('SIGINT', function() {
  gracefullShutdown(' App terminating signal (SIGINT) ', () => {
    process.exit(0);
  });
});
//The SIGTERM signal used to cause program termination.
//this signal can be blocked, handled, and ignored.
process.on('SIGTERM', function() {
  gracefullShutdown(' App terminating signal (SIGTERM)', () => {
    process.exit(0);
  });
});

function gracefullShutdown(message, callback) {
  mongoose.connection.close(function() {
    console.log("Mongooose is DisConnected with App Termination");
    console.log("Connection Intruption by" + message);
    callback();
  });
}