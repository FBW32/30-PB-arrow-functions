// 1. Multiply
// Multiply two numbers and return the result using an arrow function.


let product = (a, b) => a * b;
console.log(product(2, 3)); // 6
console.log(product(5,8));  // 40


//2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.


let myArr = [3, 5, 67, 12, 34, 4, 9, 30];
let oddsNum1 = myArr.filter(number => number % 2 !== 0);
console.log(oddsNum1);  // [ 3, 5, 67, 9 ]
let oddProduct = oddsNum1 => oddsNum1 * 2;
console.log(oddProduct(3));  // 6
console.log(oddProduct(5));  // 10 
console.log(oddProduct(67)); // 134
console.log(oddProduct(9));  // 18 

// or 

let oddsNum = [];
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 !== 0) {
        oddsNum.push(myArr[i]*2);
    }
}
console.log('task 2, 2nd solution', oddsNum);  // [ 6, 10, 134, 18 ]


// solution from Panagiota
 
let arrPanagiota = [3, 5, 67, 12, 34, 4, 9, 30];

let oddnumbarray = [];

const odd = () => {
  let result=0;
  for (let i=0; i<arrPanagiota.length; i++) {
    if (arrPanagiota[i]%2 !== 0) {
      result = arrPanagiota[i]*2;
      oddnumbarray.push(result);
    }
  }
  return oddnumbarray;  
}
console.log('from Panagiota', odd()); // from panagiota [ 6, 10, 134, 18 ]











// 3. Loopyloop
// Given an array of numbers, loop through the array and subtract 10 from each element using an arrow function. Return the new array.

let givenArr = [3, 5, 67, 12, 34, 4, 9, 30];
let newArr1 = () => {
    let subtractedItem = [];
    for (let i = 0; i < givenArr.length; i++) {
    subtractedItem.push(givenArr[i]-10)}  
    return subtractedItem;   
    }    

console.log(newArr1());   // [ -7, -5, 57,  2, 24, -6, -1, 20]



// 4. Cars
// Create an object named car. Create key pair values which include the model of the car, the manufacturer, year etc. Create an arrow function which prints the key pair values of the object.

let car = {brand: "Ferrari", model: "Testarossa", year: 1982};

let printedKeys = () => console.log(car.brand, car.model, car.year);
printedKeys(car);  // Ferrari Testarossa 1982


// 5. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.

let randomArr = [3,62,234,7,23,74,23,76,92];
let myNewArr = randomArr.filter(number => number > 70);
console.log(myNewArr);   // [ 234, 74, 76, 92 ]


// 6. Geometrizer
// Create two functions that calculate the properties of a circle.

// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".


let calcCircumfrence = (circleRadius) => 2 * Math.PI * circleRadius;
console.log("The circumference is NN: " + calcCircumfrence(12));   // The circumference is NN: 75.39822368615503

let calcArea = (circleRadius) => Math.PI * circleRadius * circleRadius;
console.log("The area is NN: " + (calcArea(12)));  // The area is NN: 452.3893421169302


// 7. The Inventors
// Given the following array, complete the tasks below.

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

let born1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(born1500);
// [{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
// { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }]




// Sort the inventors by birthdate, oldest to youngest.
let birthOrder = inventors.sort((a, b) => a.year - b.year);
console.log(birthOrder);



// Return an array of the inventors' first and last names.

let firstLastArr = inventors.map( inventors => (inventors.first + " " + inventors.last)) ;
console.log('inventors first and last names', firstLastArr);

// inventors first and last names [
//   'Nicolaus Copernicus',
//   'Galileo Galilei',
//   'Johannes Kepler',
//   'Isaac Newton',
//   'Ada Lovelace',
//   'Hanna Hammarström',
//   'Sarah E. Goode',
//   'Max Planck',
//   'Marie Curie',
//   'Lise Meitner',
//   'Albert Einstein',
//   'Katherine Blodgett'
// ]


// 8. Look at all the people...
// Given the following array, sort the people alphabetically by last name.

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
      'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
      'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
      'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
      'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
      'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
      'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
      'Blair, Tony', 'Blake, William'
    ];

    const peopleOrder = people.sort();
    console.log(peopleOrder);

//     // [
//   'Beck, Glenn',         'Becker, Carl',
//   'Beckett, Samuel',     'Beddoes, Mick',
//   'Beecher, Henry',      'Beethoven, Ludwig',
//   'Begin, Menachem',     'Belloc, Hilaire',
//   'Bellow, Saul',        'Ben-Gurion, David',
//   'Benchley, Robert',    'Benenson, Peter',
//   'Benjamin, Walter',    'Benn, Tony',
//   'Bennington, Chester', 'Benson, Leana',
//   'Bent, Silas',         'Bentsen, Lloyd',
//   'Berger, Ric',         'Bergman, Ingmar',
//   'Berio, Luciano',      'Berle, Milton',
//   'Berlin, Irving',      'Berne, Eric',
//   'Bernhard, Sandra',    'Berra, Yogi',
//   'Berry, Halle',        'Berry, Wendell',
//   'Bethea, Erin',        'Bevan, Aneurin',
//   'Bevel, Ken',          'Biden, Joseph',
//   'Bierce, Ambrose',     'Biko, Steve',
//   'Billings, Josh',      'Biondo, Frank',
//   'Birrell, Augustine',  'Black, Elk',
//   'Blair, Robert',       'Blair, Tony',
//   'Blake, William'
// ]