const sumAll = function(a, b) {
    let result = 0;

    if (!Number.isInteger(a) || !Number.isInteger(b) || typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) || a <=0 || b <=0){
        return "ERROR";
    } else {

    if (a > b){
        [a, b] = [b, a];
    }

    for(let i = a; i <= b; i++){
        result += i; 
    }

    return result;
    }

    
};

console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;
