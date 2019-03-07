const MessagingResponse =require('twilio').twiml.MessagingResponse;



module.exports.smslogic = (req,res)=>{
    console.log("hiii");
    
    const twiml = new MessagingResponse();
    twiml.message('The is new message frome node server ctrl');
    res.writeHead(200,{'Context-Type':'text/xml'})
    res.end(twiml.toString());
}