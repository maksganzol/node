
const maxCountForRequest = 10000;
var request = require('request');

function getDigits(numberOfDigits, processData) {
    doRequests(numberOfDigits, processData, "");
}

function doRequests(numberDigits, processResponse, resp) {
    getRequest = "https://www.random.org/integers/?num=" + maxCountForRequest + "&min=0&max=1&col=1&base=10&format=plain&rnd=new";
    request(getRequest, function (error, response, body) {
        resp = resp.concat(body.replace(/\s/g, ""));
        if (resp.length >= numberDigits) {
            processResponse(resp);
        }
        else {
            doRequests(numberDigits, processResponse, resp);
        }
    });

}

module.exports = {
    getDigits: getDigits
};