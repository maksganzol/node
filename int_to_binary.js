
function intToBinaryString(number, countOfDigits) {
    let str = number.toString(2);
    let length = str.length;
    for (let i = 0; i < countOfDigits - length; i++) {
        str = "0" + str;
    }
    return str;
}

module.exports = {
    intToBinaryString: intToBinaryString
}; 