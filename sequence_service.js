
var intToBinary = require("./int_to_binary");

function get2DArrayOfSequences() {
    let sequences = Create2DArray(Math.pow(2, 3));
    for (let i = 1; i <= 3; i++) {
        let countOfNumbers = Math.pow(2, i);
        for (let j = 0; j < countOfNumbers; j++) {
            sequences[i][j] = intToBinary.intToBinaryString(j, i);
        }
    }
    return sequences;
}

function Create2DArray(rows) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
    }

    return arr;
}

module.exports= {
    get2DArrayOfSequences: get2DArrayOfSequences
};
