require('./user.model');
const CONFIG = require('../config/config');
const mongoose = require('mongoose');
const options = {
    authSource:CONFIG.dbAuth,
    user:CONFIG.dbuser,
    pass:CONFIG.dbpass,
    useNewUrlParser:true,
}
const connection = mongoose.connection;
mongoose.connect(CONFIG.dburl,options);
connection.once("open",()=>{
    console.log(`mongodb connected successfully with mongoose ..!`);
})
connection.on('error',()=>{
    console.log(`mongodb connection error`);
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