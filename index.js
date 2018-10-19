require('dotenv').config();

const app = require('express')();
const bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

var Nexmo = require('nexmo');
var nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET
});

/**
 * Make the request
 */
app.get('/insight/:number', function(request, response) {
    console.log("Getting information for " + request.params.number);
    nexmo.numberInsight.get({
        level: 'advancedAsync',
        number: request.params.number,
	callback: WEBHOOK_URL
    }, function (error, result) {
	if (error) {
	    console.error(error);
	} else {
	    console.log(result);
	}
    });
});

/**
 * Callback for the webhook
 */
app.post('/webhooks/insight', function (request, response) {
    console.dir(request.body);
    response.status(204).send();
});

app.listen(app.get('port'), function() {
    console.log('Listening on port', app.get('port'));
});

      


