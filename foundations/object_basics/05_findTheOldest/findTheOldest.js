/*

Given an array of objects representing people with a birth and death year, return the oldest person.

Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.
*/

const people = [
    { name: "John", yearOfBirth: 1900},
    { name: "Mary", yearOfBirth: 1920, yearOfDeath: 2000 },
    { name: "James", yearOfBirth: 1950, yearOfDeath: 2020 },
    { name: "Sarah", yearOfBirth: 1880, yearOfDeath: 1960 },
    { name: "Robert", yearOfBirth: 1940, yearOfDeath: 2010 }
];

//console.log(new Date().getFullYear())

const findTheOldest = function(array) {

  return array.reduce((acc, person) => {
    let age;
    let initialAge

    if(!acc.yearOfDeath){
      initialAge = (new Date().getFullYear() - acc.yearOfBirth)
    } else {
      initialAge = acc.yearOfDeath - acc.yearOfBirth;
    }

    if(!person.yearOfDeath){
      age = (new Date().getFullYear() - person.yearOfBirth);
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }

    if(initialAge > age){
      return acc;
    } else {
      return person;
    }
  }, array[0])
};

console.log(findTheOldest(people));
//i have to calcule the age by using (deathYear-birthYear) if there is no deathYear use the current date

//once i have calulated that i have to sort it however it has to remain an object.
// Do not edit below this line
module.exports = findTheOldest;
