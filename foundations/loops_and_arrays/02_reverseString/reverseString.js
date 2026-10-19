const reverseString = function(string) {
    let letters = string.split("")
    return  letters.reverse().join("");
}



console.log(reverseString("hello there"));
// Do not edit below this line
module.exports = reverseString;
