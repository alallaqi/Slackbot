const { sendMessageToChannel } = require('../slack')
const { botUserOAuthAccessToken } = require('../../../slack')


describe('Slack APIs', () => {
    test('send message to channel', async () => {
        const response = await sendMessageToChannel("Hello world","general", botUserOAuthAccessToken);
        expect(response).toBeDefined();
        expect(response.message).toBeDefined();
    })
})


 

