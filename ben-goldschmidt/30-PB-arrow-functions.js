// Complete the following tasks using arrow functions.

console.log("")
console.log("Question 1: Multiply")
// 1. Multiply
// Multiply two numbers and return the result using an arrow function.

let multiply1 = (num1, num2) => {
    return num1 * num2
}
console.log(multiply1(2, 4));




console.log("")
console.log("Question 2: Double The Odds")
// 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.

let Q2arr = [3, 5, 67, 12, 34, 4, 9, 30];
let Q2string;
let Q2oddArr = [];

let doubleTheOdds = (array) => {
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            Q2string = (array[i] * 2);
            Q2oddArr.push(Q2string);
        }
    }
    return Q2oddArr
}
console.log(doubleTheOdds(Q2arr))



console.log("")
console.log("Question 3: Loopyloop")
// 3. Loopyloop
// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.

let Q3arr = [3, 5, 67, 12, 34, 4, 9, 30];
let Q3numbers;
let Q3newArr10Less = [];

let loopyLoop = (arrayQ3) => {
    for (let i = 0; i < arrayQ3.length; i++) {
        Q3numbers = arrayQ3[i] - 10;
        Q3newArr10Less.push(Q3numbers);
    }
    console.log(Q3newArr10Less);
}
loopyLoop(Q3arr);




console.log("")
console.log("Question 4: Cars")
// 4. Cars
// Create an object named car. Create key pair values which include the model of the car, the manufacturer, year etc. Create an arrow function which prints the key pair values of the object.

let object4cars = {
    // key: 'value',
    model: 'Cabriolet',
    manufacturer: 'Volkswagen',
    year: '2013'
}
let carPrint4 = (arrayQ4) => {
    console.log("Keys");
    console.log(Object.keys(arrayQ4));
    console.log("Values");
    console.log(Object.values(arrayQ4));
}
carPrint4(object4cars);



console.log("")
console.log("Question 5: Filter")
// 5. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.

let Q5arr = [3, 62, 234, 7, 23, 74, 23, 76, 92];
let Q5greaterThan70arr = [];

let greaterThan70 = (arrayQ5Input) => {
    for (let i = 0; i < arrayQ5Input.length; i++) {
        if (arrayQ5Input[i] > 70) {
            Q5greaterThan70arr.push(arrayQ5Input[i]);
        }
    }
    console.log(Q5greaterThan70arr);
}
greaterThan70(Q5arr)



console.log("")
console.log("Question 6: Geometrizer")
// 6. Geometrizer
// Create two functions that calculate the properties of a circle.

// area = pi * (radius ** 2)
// A = πr2

// circumference = 2 * pi * r
// C = 2πr

// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

let circumCirc1;
let circumCheck = (circumRadinCM) => {
    circumCirc1 = 3.14 * (circumRadinCM ** 2);
    console.log(`If the radius is ${circumRadinCM} The circumference of this circle is ${circumCirc1}`)
}
circumCheck(5)

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
// A = πr2

let areaCheck = (areaRad) => {
    let areaCirc1;

    areaCirc1 = 3.14 * areaRad * 2;
    console.log(`If the radius is ${areaRad} then the area of the circle is ${areaCirc1}`);
}
areaCheck(10);




console.log("")
console.log("Question 7: The Inventors")
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
// Sort the inventors by birthdate, oldest to youngest.
// Return an array of the inventors' first and last names.


let = filterinvestors = (inventorsInput) => {
    let birthyear;
    let firstName;
    let lastName;
    let investorArray = [];

    for (i = 0; i < inventorsInput.length; i++) {
        birthyear = (Object.values(inventorsInput[i]))[2];
        if ((birthyear >= 1500) && (birthyear < 1600)) {
            firstName = Object.values(inventorsInput[i])[0];
            lastName = Object.values(inventorsInput[i])[1];
            investorArray.push(`"${firstName} ${lastName}"`);
        }
    }
    console.log(investorArray);
}
filterinvestors(inventors);



console.log("")
console.log("Question 8: The Inventors")
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

// let orderedPeople = (peopleArray) => {
//     console.log(peopleArray.sort());
// }
// orderedPeople(people);

let peoplePrint = 0;
let orderedPeople = (peopleArray) => {
    for (i = 0; i < peopleArray.length; i++) {
        peoplePrint = peopleArray[i]
        console.log(peoplePrint)
    }
}
orderedPeople(people);