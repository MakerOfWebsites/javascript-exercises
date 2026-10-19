
const repeatString = function(string, num) {
    let result = [];
    if (num < 0) {
        return "ERROR";
    } else {
        for(let i = 0; i < num; i++){
            result.push(string)
        }
        return result.join("");
    }
};
console.log(repeatString("hi", 4))


// Do not edit below this line
module.exports = repeatString;
