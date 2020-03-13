const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
 

client.messages
      .create({from: '+19046829073', body: `This is the song that never ends, yes it goes on and on my friend. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...This is the song that never ends, yes it goes on and on my friend. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...This is the song that never ends, yes it goes on and on my friend. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...This is the song that never ends, yes it goes on and on my friend. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...This is the song that never ends, yes it goes on and on my friend. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...This is the song that never ends, yes it goes on and on my friend. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...`, to: '+19045371699'})
      .then(response => {
          console.log(response.numSegments)
          console.log(response)
        });
