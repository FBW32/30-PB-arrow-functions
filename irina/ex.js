// Complete the following tasks using arrow functions.

// 1. Multiply
// Multiply two numbers and return the result using an arrow function.

let multiply = (a,b) => {
    let result = a * b;
    return result;
}
console.log(multiply(5,10));  //50

// 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.

let arr3 = [3, 5, 67, 12, 34, 4, 9, 30]
const doubleOdd = () => {
    let result = 1;
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] % 2 !== 0){
        result = arr3[i] * 2 ;
        console.log(result);
        /*
6
10
134
18 */
    }
}
}
console.log(doubleOdd(arr3));

//OR
let arr2 = [3, 5, 67, 12, 34, 4, 9, 30];
            for (let i = 0; i < arr2.length; i++) {
                if (arr2[i] % 2 !== 0) {
           console.log(arr2[i] * 2);
        }
    }

// 3. Loopyloop
// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.

let  arrow_function = (number) => {
    let array = [10, 20, 30, 40];
    const boxArr = [];
    for(let i = 0; i < array.length; i++) {
        result = array[i] -10;
        boxArr.push(result)
    }
    return boxArr.join(",")
}

console.log(arrow_function()); //0 10 20 30

    

// 4. Cars
// Create an object named car. Create key pair values which include the model of the car, the manufacturer, year etc. Create an arrow function which prints the key pair values of the object.


let car2 = (model, manufacturer, year) => {
    return {
      model,
      manufacturer, 
      year 
    };
  }
  console.log(car2('UNO', 'FIAT', '2014')); //{ model: 'UNO', manufacturer: 'FIAT', year: '2014' }

//OR
let car = {};
car.model = "UNO";
car['information'] = [ 
 { manufacturer:"FIAT", year: "2014"}, 
];
console.log(car); 


// 5. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.


let array5 =[3,62,234,7,23,74,23,76,92];
let newArr = [];
let numberGreaterThan = () => {
for (let i= 0; i < array5.length; i++)
{
    if (array5[i] > 70)
    {
      newArr.push(array5[i])
      newArr.join(" ");
    }
}
return newArr
}
console.log(numberGreaterThan(newArr)); //[ 234, 74, 76, 92 ]

//OR
let array6 =[3,62,234,7,23,74,23,76,92];
let newArray = [];
for (let i= 0; i < array6.length; i++)
{
    if (array6[i] > 70)
    {
      newArray.push(array6[i]);
      newArray.join(" ");
    }
}
console.log(newArray); //[ 234, 74, 76, 92 ]


// 6. Geometrizer
// Create two functions that calculate the properties of a circle.
// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

/*
Area = πr2
circumference = 2πr = πD
Diameter= 2 x r
D = 2r
r = D/2
*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
/*
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(Math.PI); // 3.141592653589793

console.log(calculateCircumference(10)); // 62.83185307179586
*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

let calcCircumfrence = radius => {
    let circumference = Math.PI * 2 * radius;
    return "The circle circumference is " + Math.round(circumference) +"cm"
}
console.log(calcCircumfrence(3)); // The circle circumference is 19cm
function calcArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return "The circle area is " + Math.round(area) + "cm2" //The circle area is 28cm2
}
console.log(calcArea(3)); 


//OR
function circle(radius) {
    this.radius = radius;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    this.circumference = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('Circumference =', c.circumference().toFixed(2));

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
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach --> The forEach() method executes a provided function once for each array element.
inventors.forEach(inventors => {
    if (inventors.year >= 1500 && inventors.year < 1600) {
        console.log(inventors.first + ' ' + inventors.last);   
    }
})
//Galileo Galilei
//Johannes Kepler
//OR
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter --> The filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log(
    inventors.filter( ( { year } ) => ( 1499 < year && year < 1600 ) )
);
//[ { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 } ]

// Sort the inventors by birthdate, oldest to youngest.
console.log(
    inventors.sort( ( { year: a }, { year: b } ) => ( a - b ) )
);

/*
[ { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 } ] */

// Return an array of the inventors' first and last names.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map --> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 
//aqui para a variável inventors foi chamado as key first e last e devolveu os valores da array = object. 
console.log(
    inventors.map( ( { first, last } ) => `${first} ${last}` )
);
/*
[ 'Albert Einstein',
  'Isaac Newton',
  'Galileo Galilei',
  'Marie Curie',
  'Johannes Kepler',
  'Nicolaus Copernicus',
  'Max Planck',
  'Katherine Blodgett',
  'Ada Lovelace',
  'Sarah E. Goode',
  'Lise Meitner',
  'Hanna Hammarström' ] */


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

people.sort();
console.log(people);
/*
[ 'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Ben-Gurion, David',
  'Benchley, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William' ] */
