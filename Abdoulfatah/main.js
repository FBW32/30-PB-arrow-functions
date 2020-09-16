// ## Complete the following tasks using arrow functions. 

// #### 1. Multiply
console.log('-----------First question----------');
//let Multiply =(a,b)=> a*b; or:
let Multiply =(a,b)=> {
    let result = a*b;
    return result;
}
console.log(Multiply(5,15)); //75

//----------XXXXX----------

console.log('-----------Second question----------');
// #### 2. Double The Odds

let arr = [3,5,67,12,34,4,9,30];
let oddNumbArray= [];
const odd =() => {
    let result=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 !==0){
            result=arr[i]*2;
            oddNumbArray.push(result);
        }
    }  return oddNumbArray;
}
console.log(odd()); 
// 6
// 10
// 134
// 18
//[ 6, 10, 134, 18 ]

//----------XXXXX----------

console.log('-----------Third question----------');
// #### 3. LoopyLoop

let arr2=[34,6,7,2,743,36,267,43,12];
let newArr2=[];
const subTractor=()=> {
    for (i=0;i<arr2.length;i++){
        newElement=arr2[i]-10;
        newArr2.push(newElement);
    } return newArr2;
} 
console.log(subTractor(arr2));

//----------XXXXX----------
console.log('-----------Fourth question----------');
// #### 4. Cars

let car={
    model:'Mercedes',
    manufacturer:'Daimler AG ',
    class:'S',
    color:'Red',
    year:'2020',
}
const carProperties=(object)=> Object.entries(object);
console.log(carProperties(car));

//----------XXXXX----------

console.log('-----------Fifth question----------');
// #### 5. Filter

const arr5 = [3,62,234,7,23,74,23,76,92];
const filtered= arr5.filter(v=>v >70);

console.log(filtered);

//----------XXXXX----------

console.log('-----------Sixth question----------');
// #### 6. Geometrize

calcCircumference=(r)=>r*2*Math.PI;
console.log("The circumference is: " + calcCircumference(3));

calcArea=(r)=> Math.PI*Math.pow(r,2);
console.log('The area is : ' + calcArea(3));

//----------XXXXX----------

console.log('-----------Seventh question----------');
// #### 7. The Inventors

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

const bornIn1500 = inventors.filter(inventors=> inventors.year >=1500);
console.log("Inventors who born in year 1500 or after: ",bornIn1500);

const inventorsByBirthday = inventors.sort((a,b)=> a.year-b.year);
console.log("Inventors sorted by birthday: ",inventorsByBirthday);

function getFullName(inventor){
    let fullName = [inventor.first, inventor.last].join(" ");
    return fullName;
}
console.log("Inventors full name: ",inventors.map(getFullName));

//----------XXXXX----------

console.log('-----------Eighth question----------');

// #### 8. Look at all the people...
// Given the following array, sort the people alphabetically by last name.

// ```javascript
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 
    'Beddoes, Mick', 'Beecher, Henry','Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert','Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony','Bennington,Chester',
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
    'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose','Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'];

    const sortedPeople = people.sort((a,b)=>a-b,1);
    console.log(sortedPeople);