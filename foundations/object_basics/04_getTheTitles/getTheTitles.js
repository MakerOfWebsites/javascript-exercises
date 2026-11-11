const books = [
    {
        title: "The Hobbit",
        amountOfReaders: 120
    },
    {
        title: "Harry Potter",
        amountOfReaders: 250
    },
    {
        title: "The Great Gatsby",
        amountOfReaders: 85
    }
];

const getTheTitles = function(array) {
    return array.map((item) => item.title);

};

console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
