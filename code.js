

var request = require('request');

getMillionDigits();


function GET(count, resp){

    request('https://www.random.org/integers/?num=10&min=0&max=1&col=1&base=10&format=plain&rnd=new', function (error, response, body) {
        if(count<=10){
            count++;
            resp = resp.concat(response.body);
            GET(count, resp)
        } else {
            showData(resp);
        }
    });

}

function showData(resp){
    resp = resp.replace(/\s/g, "");
        var str = resp;
        var seq = getSequences2DArray();
            
        console.log(resp.length)
        for(let i = 0; i < seq.length; i++){
            for(let j = 0; j < seq[i].length; j++){
                count = getCountOfSequence(seq[i][j], str);
                console.log(seq[i][j] + ": " + count + ", " + getFrequencyInPersent(count, getCountOfAllSequences(i, str)) + "%");
            }
        }
}
function getMillionDigits(){
    count = 0;
    resp = "";
    count++;
    GET(count, resp);

}


function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
function getSequences2DArray(){
	var sequences = Create2DArray(Math.pow(2, 3));
	for(let i = 1; i <=3; i++){
		var countOfNumbers = Math.pow(2, i);
		for(let j = 0; j < countOfNumbers; j++){
			sequences[i][j] = intToBinary(j, i);//j.toString(2);
		}
	}
	return sequences;
}

function intToBinary(number, countOfDigits){
    var str = number.toString(2);
	var length = str.length;
	for(let i = 0; i < countOfDigits - length; i++){
		str = "0" + str;
	}
	return str;
}

function getFrequencyInPersent(count, commonCount){
	return Math.floor((count/commonCount)*100)
}

function getCountOfAllSequences(lengthOfSequences, str){
	var summ = 0;
	for(let i = 0; i < Math.pow(2, lengthOfSequences); i++){
		sequen = intToBinary(i, lengthOfSequences);
		count = getCountOfSequence(sequen, str);
		summ += count;
	}
	return summ;
}

function getCountOfSequence(seq, str){
    var count = 0;
    flag = false;
	for(let i = 0; i < str.length; i++){
		for(let j = 0; j < seq.length; j++){
			if(str[i+j]!=seq[j]){
                flag = false;
                break;
			}
			flag = true;
        }
        if(flag) {
            count++;
        }
	}
	return count;
}




