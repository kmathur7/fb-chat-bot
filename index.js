var botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(function (message) {

        if(message.text=="who created you?"){
            return 'Kunal Mathur'
        }

        else {
            return 'Thanks for sending ' + message.text + ' ! ';
        }


    
});