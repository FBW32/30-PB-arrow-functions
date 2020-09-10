// #### 1. Multiply
//Multiply two numbers and return the result using an arrow function. 


let numSum = (num1,num2) => num1 + num2;
console.log(numSum(40, 5));  // 45

//#### 2. Double The Odds
//Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2. 


let linArr = "";
let NewArray = (oldArr) => {

    for (let i = 0; i < oldArr.length; i++) {
        
        
        let verNum = oldArr[i] 
       
        if (verNum % 2 !== 0) {

            let arrDbl = verNum * 2;
            linArr += arrDbl + " " ;
        } 
    } 
    console.log(linArr);
} 

NewArray([3, 5, 67, 12, 34, 4, 9, 30]);  // 6 10 134 18 


//#### 3. Loopyloop
//Given an array of numbers, loop through the array and subtract 10 from each element using an arrow function. Return the new array. 

let nwRedArr = []
let reducedByTen = (arrLoop) => {
    for (let i = 0; i < arrLoop.length; i++) {
        let lopEl = arrLoop[i] -10;
        nwRedArr.push(lopEl);

    } 
    console.log(nwRedArr);
} 

reducedByTen([20,43,65,50,35,72,14]);  // [10, 33, 55, 40,25, 62,  4]
  

// #### 4. Cars
//Create an object named car. Create key pair values which include the model of the car, the manufacturer, year etc. Create an arrow function which prints the key pair values of the object.

 let car = (model,manF,year) => {

    console.log(` the car ${model} was made by ${manF} in the year ${year}`)
 }  

  car("Ti20","Mercedes","2021"); // the car Ti20 was made by Mercedes in the year 2021


// #### 5. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than `70`. Store the result into a variable. 

let arrFilter = (arrLn) => {

    let abvSnty = [];

    for (let i = 0; i < arrLn.length; i++) {
        
        if (arrLn[i] > 70) {

            abvSnty.push(arrLn[i])
        }
        
    }console.log(abvSnty);
}

arrFilter([3,62,234,7,23,74,23,76,92])  // [ 234, 74, 76, 92 ]

// #### 6. Geometrizer
// Create two functions that calculate the properties of a circle. 

// Create a function called calcCircumfrence:
// * Pass the radius to the function.
// * Calculate the circumference based on the radius, and output "The circumference is NN".



let calcCircumference = (radNum) => {
    
    let pieNum = 3.14 * 2;
    let cirCum = pieNum * radNum;
   
    console.log("The circumference is", Math.round(cirCum));
    
}

calcCircumference(8);     // The circumference is 50

// Create a function called calcArea:
//* Pass the radius to the function.
//* Calculate the area based on the radius, and output "The area is NN".

let calcArea = (radNum2) => {
    
    let pieNum2 = 3.14 ;
    radNum2 = radNum2 ** radNum2;
    let cirArea = pieNum2 * radNum2;
   
    return Math.round(cirArea);
    
}

   console.log("The area is" ,calcArea(3));     // The area is 85
   

// #### 7. The Inventors
//Given the following array, complete the tasks below.

//* Filter the list of inventors for those who were born in the 1500's. 

   const inventors =
   [{
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

let filterInv = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

console.log(filterInv);


//[
 // { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
 // { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
//]

//* Sort the inventors by birthdate, oldest to youngest. 


let youngSort = inventors.sort((a, b) => a.year > b.year ? 1:-1);

console.log(youngSort);  // 

//[
// { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
//  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
// { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
//]


// Return an array of the inventors' first and last names.

let firstLastNames = inventors.map( inventor => `${inventor.first} ${inventor.last}`);
    
console.log(firstLastNames); 

/*
//[
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
//]
*/


//Given the following array, sort the people alphabetically by last name.

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
      'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
      'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
      'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
      'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
      'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
      'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
      'Blair, Tony', 'Blake, William'
    ];



    //const defaultSort = Array.from(people).sort();
    
    const namesSort = Array.from(people).sort((a, b) => a - b);
    
  
    //console.log(defaultSort);
    console.log(namesSort);
    
/*
    [
      'Beck, Glenn',         'Becker, Carl',
      'Beckett, Samuel',     'Beddoes, Mick',
      'Beecher, Henry',      'Beethoven, Ludwig',
      'Begin, Menachem',     'Belloc, Hilaire',
      'Bellow, Saul',        'Benchley, Robert',
      'Benenson, Peter',     'Ben-Gurion, David',
      'Benjamin, Walter',    'Benn, Tony',
      'Bennington, Chester', 'Benson, Leana',
      'Bent, Silas',         'Bentsen, Lloyd',
      'Berger, Ric',         'Bergman, Ingmar',
      'Berio, Luciano',      'Berle, Milton',
      'Berlin, Irving',      'Berne, Eric',
      'Bernhard, Sandra',    'Berra, Yogi',
      'Berry, Halle',        'Berry, Wendell',
      'Bethea, Erin',        'Bevan, Aneurin',
      'Bevel, Ken',          'Biden, Joseph',
      'Bierce, Ambrose',     'Biko, Steve',
      'Billings, Josh',      'Biondo, Frank',
      'Birrell, Augustine',  'Black, Elk',
      'Blair, Robert',       'Blair, Tony',
      'Blake, William'
    ]
*/