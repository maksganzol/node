
var intToBinary = require("./int_to_binary");

function getFrequencyOfSequence(sequence, digits) {
    let quantity = getNumberOfSequence(sequence, digits);
    let totalAmount = getNumberOfAllSequences(sequence.length, digits);
    return getFrequencyInPersent(quantity, totalAmount) + "%";
}

function getNumberOfSequence(sequence, digits) {
    let count = 0;
    flag = false;
    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < sequence.length; j++) {
            if (digits[i + j] != sequence[j]) {
                flag = false;
                break;
            }
            flag = true;
        }
        if (flag) {
            count++;
        }
    }
    return count;
}

function getNumberOfAllSequences(lengthOfSequences, digits) {
    let summ = 0;
    for (let i = 0; i < Math.pow(2, lengthOfSequences); i++) {
        let sequence = intToBinary.intToBinaryString(i, lengthOfSequences);
        count = getNumberOfSequence(sequence, digits);
        summ += count;
    }
    return summ;
}

function getFrequencyInPersent(quantity, totalAmount) {
    return Math.floor((quantity / totalAmount) * 100)
}
module.exports = {
    getFrequencyOfSequence: getFrequencyOfSequence,
    getNumberOfSequence: getNumberOfSequence
}