const palindromes = function (str) {
//needs to be case insentive, needs to ignore punctuation, apparently needs to ignore spaces as well  
let word = str.toUpperCase().replace(/\s+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

let reversedWord = word.split("").reverse().join("");


if (word === reversedWord){
    return true;
} else {
    return false;
}
};

console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
