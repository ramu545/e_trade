const http =require('http');
const express =require('express');
const MessagingResponse =require('twilio').twiml.MessagingResponse;

const app = express();
app.post('/sms',(req,res)=>{
    const twiml = new MessagingResponse();

    twiml.message('The is new message');

    res.writeHead(200,{'Context-Type':'text/xml'})
    res.end(twiml.toString());
    });

   http.createServer(app).listen(1337,()=>{
       console.log('Server listening to port 1337');
   });