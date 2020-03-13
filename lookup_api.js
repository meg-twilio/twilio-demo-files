const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
 

client.lookups.phoneNumbers('+19045371699')
    .fetch({type: ['carrier']})
    .then(response => {
        console.log(response.carrier.name)
        // console.log(response)    
    }
    );
