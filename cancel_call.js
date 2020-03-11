const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
 
const fromCaller = ""

// Note: Will need to update the below CallSid to the given call you want to cancel
client.calls('CAXXXXXXXXXXX')   
    .update( { status: 'completed' })
    .then(call => {
        console.log(call.to, call.from),
        toCaller = call.from, 
        console.log(toCaller)
    })

// In process: Chaining Call Cancellations + Sending SMS Notification of Cancellation
// client.messages
//     .create({ body: 'Sorry! Your call was disconnected!', from: '+19046829073', to: fromCaller})
//     .then(message => console.log(message.sid))

