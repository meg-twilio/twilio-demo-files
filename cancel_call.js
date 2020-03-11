const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
 
const fromCaller = ""

client.calls('CA29475fbe472842f5114fd40e5580a7d4')   
    .update( { status: 'completed' })
    .then(call => {
        console.log(call.to, call.from),
        toCaller = call.from, 
        console.log(toCaller)
    })
client.messages
    .create({ body: 'Sorry! Your call was disconnected!', from: '+19046829073', to: fromCaller})
    .then(message => console.log(message.sid))

