'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.tell('Meet Patrick. He is a Voice App developer who has been building apps on Google Assistant and Amazon Alexa for over three years. Patrick is a senior at the Ohio State University. You can see the apps Pat has built on his github. Pat\s Github username is Sweetmantech');
    },
});

module.exports.app = app;
