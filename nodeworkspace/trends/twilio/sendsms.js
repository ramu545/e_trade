const accountSid ='AC022857422592d0fec49e907e50af645b';
const authToken = '6efa5c0e5e8df16c4a2bde72aa18f2b5';
const client =require('twilio')(accountSid,authToken);

client.messages.create({
    body:'This is the sample sms from node server',
    from:'+16056464385',
    to: '+918143914354'
},(err,data)=>{
    if(err) console.log(err);
    console.log(data);
})
// .then(message =>console.log(message.sid));
