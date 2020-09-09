/* 1. 
Multiply
Multiply two numbers and return the result using an arrow function. */

let num1 = (a, b) => a * b;
console.log(num1(3, 7)); // 21

/* 2. 
Double The Odds
Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2. */

let Numbers = [3, 5, 67, 12, 34, 4, 9, 30];
let odd = [];
let oddNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i] * 2);
    } else {
      console.log("no odd numbers");
    }
  }
  return odd;
};
console.log(oddNum(Numbers)); // [ 6, 10, 134, 18 ]

/* 3. 
Loopyloop
Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array. */

let arr2 = [2, 4, 3, 6, 8, 1, 23, 78, 45];
let newarr2 = [];
let substraction = (xx) => {
  for (let i = 0; i < xx.length; i++) {
    newarr2.push(arr2[i] - 10);
  }
  return newarr2;
};
console.log(substraction(arr2));

/* 4. 
Cars
Create an object named car. Create key pair values which include the model of the car, the manufacturer, year etc. Create an arrow function which prints the key pair values of the object. */

let carDetails = {
  model: "BMW",
  manufacturer: "BMW Group",
  age: 2000,
  color: "black",
};

let ValuePairs = (car) => {
  return Object.values(car);
};
console.log(ValuePairs(carDetails)); // [ 'BMW', 'BMW Group', 2000, 'black' ]

/* 5. 
Filter
Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable. */

let Arrr = [3, 62, 234, 7, 23, 74, 23, 76, 92];
let output2 = x => x > 70;
let output = Arrr.filter(output2);
console.log("greater than 70", output);  // greater than 70 [ 234, 74, 76, 92 ]

/* 6. 
Geometrizer
Create two functions that calculate the properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
 */

let calcCircumfrence = radious => radious * 2 * 3.14;
console.log("The circumference is NN", calcCircumfrence(3));  // The circumference is NN 18.84 

let calcArea = radious2 => radious2 * radious2 * 3.14;
console.log("The area is NN", calcCircumfrence(3));  // The area is NN 18.84


/* 7. 
The Inventors
Given the following array, complete the tasks below. 
*/

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];

// Filter the list of inventors for those who were born in the 1500's.


console.log(inventors.filter( ( { year } ) => ( 1500 < year && year < 1600 ) )
);

/* 
    Sort the inventors by birthdate, oldest to youngest. */


    console.log(
        inventors.sort( ( { year: a }, { year: b } ) => ( a - b ) )
    );
    
/*     Return an array of the inventors' first and last names.
 */
console.log(
    inventors.map(({ first, last } ) => `"inventors first and last names", ${first} ${last}` )
);
// [
//   '"inventors first and last names", Nicolaus Copernicus',
//   '"inventors first and last names", Galileo Galilei',
//   '"inventors first and last names", Johannes Kepler',
//   '"inventors first and last names", Isaac Newton',
//   '"inventors first and last names", Ada Lovelace',
//   '"inventors first and last names", Hanna Hammarström',
//   '"inventors first and last names", Sarah E. Goode',
//   '"inventors first and last names", Max Planck',
//   '"inventors first and last names", Marie Curie',
//   '"inventors first and last names", Lise Meitner',
//   '"inventors first and last names", Albert Einstein',
//   '"inventors first and last names", Katherine Blodgett'
// ]

/* 8. 
Look at all the people...
Given the following array, sort the people alphabetically by last name. */

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry','Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert','Aenenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester','Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Gerger, Ric', 'Bergman, Ingmar', 'Berio, Luciano','Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle','Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose','Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert','Blair, Tony', 'Blake, William'
    ];

    console.log(people.sort()); 
// [
//   'Aenenson, Peter',     'Beck, Glenn',
//   'Becker, Carl',        'Beckett, Samuel',
//   'Beddoes, Mick',       'Beecher, Henry',
//   'Beethoven, Ludwig',   'Begin, Menachem',
//   'Belloc, Hilaire',     'Bellow, Saul',
//   'Ben-Gurion, David',   'Benchley, Robert',
//   'Benjamin, Walter',    'Benn, Tony',
//   'Bennington, Chester', 'Benson, Leana',
//   'Bent, Silas',         'Bentsen, Lloyd',
//   'Bergman, Ingmar',     'Berio, Luciano',
//   'Berle, Milton',       'Berlin, Irving',
//   'Berne, Eric',         'Bernhard, Sandra',
//   'Berra, Yogi',         'Berry, Halle',
//   'Berry, Wendell',      'Bethea, Erin',
//   'Bevan, Aneurin',      'Bevel, Ken',
//   'Biden, Joseph',       'Bierce, Ambrose',
//   'Biko, Steve',         'Billings, Josh',
//   'Biondo, Frank',       'Birrell, Augustine',
//   'Black, Elk',          'Blair, Robert',
//   'Blair, Tony',         'Blake, William',
//   'Gerger, Ric'
// ]
