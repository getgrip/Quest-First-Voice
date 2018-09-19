const expect = require('chai').expect;

const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;
const {send} = require('jovo-framework').TestSuite;

for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {

  describe('Launch-Tests', () => {
    it('should introduce Patrick Sweetman', () => {
        return send(rb.intent('LAUNCH'))
            .then((res) => {
                const matchedResponse = res.isTell('Meet Patrick. He is a Voice App developer who has been building apps on Google Assistant and Amazon Alexa for over three years. Patrick is a senior at the Ohio State University. You can see the apps Pat has built on his github. Pat\s Github username is Sweetmantech');
                expect(matchedResponse).to.equal(true);
            })
    })

    // Add more tests for this group here
  })

}
