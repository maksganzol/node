
var random = require("./random_service.js")
var seq_service = require("./sequence_service.js")
var stat_service = require("./statistic_service")

console.log("The request process may take several minutes, please wait... ");
random.getDigits(95455, displayData);

function displayData(digits) {

  let sequences = seq_service.get2DArrayOfSequences();

  console.log(digits.length + " digits were generated.")

  for (let i = 0; i < sequences.length; i++) {
    for (let j = 0; j < sequences[i].length; j++) {
      let num = stat_service.getNumberOfSequence(sequences[i][j], digits);
      console.log(sequences[i][j] + ": " + num + ", " + stat_service.getFrequencyOfSequence(sequences[i][j], digits));
    }
  }
}

