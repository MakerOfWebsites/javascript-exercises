const removeFromArray = function(array, ...values) {
    return array.filter(x => !values.includes(x));

};

console.log(removeFromArray([1, 2, 3, 4], 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
