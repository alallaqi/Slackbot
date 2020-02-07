const fetch = require('node-fetch')

const postUrl = "https://slack.com/api/chat.postMessage";

async  function sendMessageToChannel(text, channel, bearerToken) {
        const response = await fetch(postUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${bearerToken}`
          },
       
          body: JSON.stringify({
            channel,
            text
        })
        });
        return await response.json();
    }
      
    
    
  module.exports = {
    sendMessageToChannel
  }

