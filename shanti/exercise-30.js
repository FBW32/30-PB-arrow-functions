// Complete the following tasks using arrow functions.

/* 1. Multiply
        Multiply two numbers and return the result using an arrow function. 
*/
let multiply = (a,b) => a * b;
console.log(multiply(5, 8)); // 40

/* 2. Double The Odds
Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.
*/

let doubleTheOdds = (array) => {
    let odds = array.filter(n => n % 2);
    console.log(odds); // [ 3, 5, 67, 9 ]
    for ( let i = 0; i < odds.length; i++){
        odds[i] = odds[i] * 2;
    }
    console.log(odds); // [ 6, 10, 134, 18 ]
}
doubleTheOdds([3, 5, 67, 12, 34, 4, 9, 30]);

/* 3. Loopyloop
    Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.
*/
let subtract = "";
let loopyLoop = (array) => {
    for ( let i = 0; i < array.length; i++) {
         subtract = array[i] - 10;
         console.log(subtract);
    }
}
loopyLoop([10, 20, 50, 40, 75, 66]); 
/*
    0
    10
    40
    30
    65
    56
*/

/* 4. Cars
    Create an object named car. Create key pair values which include the model of the car, the manufacturer, year etc. Create an arrow function which prints the key pair values of the object.
*/
let car = {
    model: "BMW-M240i",
    manufacturer: "BMW",
    year: 2018,
    style: "2 door convertible",

};
Object.keys(car).forEach(key => console.log(key));
/*
    model
    manufacturer
    year
    style
*/

Object.values(car).forEach(value => console.log(value));
/*
    BMW-M240i
    BMW
    2018
    2 door convertible
*/


/* 5. Filter
    Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.
*/
let numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]; 
let greater = numbers.filter(number => number > 70);
console.log(greater); // [ 234, 74, 76, 92 ]

/* 6. Geometrizer
    Create two functions that calculate the properties of a circle.
    
    Create a function called calcCircumfrence:
    Pass the radius to the function.
    Calculate the circumference based on the radius, and output "The circumference is NN".
    
    Create a function called calcArea:
    Pass the radius to the function.
    Calculate the area based on the radius, and output "The area is NN".
*/
function calcCircumfrence(radius) {
    let circumference = Math.PI * 2 * radius;
    console.log("The circumference is " + circumference);
}calcCircumfrence(5); // The circumference is 31.41592653589793
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    console.log("The area of circle is " + area);
}calcArea(5); // The area is 78.53981633974483

/* 7. The Inventors
    Given the following array, complete the tasks below.

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
    Filter the list of inventors for those who were born in the 1500's.
    Sort the inventors by birthdate, oldest to youngest.
    Return an array of the inventors' first and last names.
*/
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
const people1 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(people1);
/*
    [
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
    ]
*/

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);
/*
    ┌─────────┬─────────────┬───────────────┬──────┬────────┐
    │ (index) │    first    │     last      │ year │ passed │
    ├─────────┼─────────────┼───────────────┼──────┼────────┤
    │    0    │ 'Nicolaus'  │ 'Copernicus'  │ 1473 │  1543  │
    │    1    │  'Galileo'  │   'Galilei'   │ 1564 │  1642  │
    │    2    │ 'Johannes'  │   'Kepler'    │ 1571 │  1630  │
    │    3    │   'Isaac'   │   'Newton'    │ 1643 │  1727  │
    │    4    │    'Ada'    │  'Lovelace'   │ 1815 │  1852  │
    │    5    │   'Hanna'   │ 'Hammarström' │ 1829 │  1909  │
    │    6    │ 'Sarah E.'  │    'Goode'    │ 1855 │  1905  │
    │    7    │    'Max'    │   'Planck'    │ 1858 │  1947  │
    │    8    │   'Marie'   │    'Curie'    │ 1867 │  1934  │
    │    9    │   'Lise'    │   'Meitner'   │ 1878 │  1968  │
    │   10    │  'Albert'   │  'Einstein'   │ 1879 │  1955  │
    │   11    │ 'Katherine' │  'Blodgett'   │ 1898 │  1979  │
    └─────────┴─────────────┴───────────────┴──────┴────────┘
*/

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);
/*
    [
    'Nicolaus Copernicus',
    'Galileo Galilei',
    'Johannes Kepler',
    'Isaac Newton',
    'Ada Lovelace',
    'Hanna Hammarström',
    'Sarah E. Goode',
    'Max Planck',
    'Marie Curie',
    'Lise Meitner',
    'Albert Einstein',
    'Katherine Blodgett'
    ]
*/

/* 8. Look at all the people...
Given the following array, sort the people alphabetically by last name.

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
      'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
      'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
      'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
      'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
      'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
      'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
      'Blair, Tony', 'Blake, William'
    ];
*/
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
      'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
      'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
      'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
      'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
      'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
      'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
      'Blair, Tony', 'Blake, William'
    ];
const sortedPeople = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
      });
      
console.log(sortedPeople);   
/*
    [
    'Beck, Glenn',         'Becker, Carl',
    'Beckett, Samuel',     'Beddoes, Mick',
    'Beecher, Henry',      'Beethoven, Ludwig',
    'Begin, Menachem',     'Belloc, Hilaire',
    'Bellow, Saul',        'Ben-Gurion, David',
    'Benchley, Robert',    'Benenson, Peter',
    'Benjamin, Walter',    'Benn, Tony',
    'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas',         'Bentsen, Lloyd',
    'Berger, Ric',         'Bergman, Ingmar',
    'Berio, Luciano',      'Berle, Milton',
    'Berlin, Irving',      'Berne, Eric',
    'Bernhard, Sandra',    'Berra, Yogi',
    'Berry, Wendell',      'Berry, Halle',
    'Bethea, Erin',        'Bevan, Aneurin',
    'Bevel, Ken',          'Biden, Joseph',
    'Bierce, Ambrose',     'Biko, Steve',
    'Billings, Josh',      'Biondo, Frank',
    'Birrell, Augustine',  'Black, Elk',
    'Blair, Tony',         'Blair, Robert',
    'Blake, William'
    ]
*/
