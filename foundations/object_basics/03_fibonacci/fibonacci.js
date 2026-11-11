const fibonacci = function(num) {
    if(num <= 0 || isNaN(num)){
        return "OOPS";
    }

    let fibonacci = [1, 1];
for(let i = 1; i < num; i++){
        let lastItem = fibonacci.at(-1);
        let oneBeforelastItem = fibonacci.at(-2);
        let fibonacciNumber = lastItem + oneBeforelastItem;
        fibonacci.push(fibonacciNumber);
}   
    return fibonacci[num - 1]; 
};


// Do not edit below this line
module.exports = fibonacci;
