
const maxCountForRequest = 10000;

function 


function doRequest(countOfDigits, resp, processData) {

    var request = require('request');
    request('https://www.random.org/integers/?num=10000&min=0&max=1&col=1&base=10&format=plain&rnd=new', function (error, response, body) {
      if (count <= 9) {
        count++;
        resp = resp.concat(response.body);
        GET(count, resp)
      } else {
        processData(resp);
      }
    });
  
  }