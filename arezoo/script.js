//1
let Multiply = (a, b) => {
  return a * b;
};
console.log(Multiply(2, 5));

//2

let arrayOdd = (arr) => {
  let resultarray = [];
  let multiplyArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      resultarray.push(arr[i]);
      multiplyArray.push(arr[i] * 2);
    }
  }
  console.log(resultarray);
  console.log(multiplyArray);
};

arrayOdd([3, 5, 67, 12, 34, 4, 9, 30]);

//3
let arraySubtract = (arr) => {
  let resultSub = [];
  for (let i = 0; i < arr.length; i++) {
    resultSub.push(arr[i] - 10);
  }
  return resultSub;
};

console.log(arraySubtract([33, 65, 7, 9, 10]));

//4
let car = { year: "1990", model: "benzx223", doors: "b3" };
let carModel = (car) => {
  console.log(car.year + " " + car.model + " " + car.doors);
};

carModel(car);

//5
let arrayfilter = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 70) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(arrayfilter([3, 62, 234, 7, 23, 74, 23, 76, 92]));

//6
let calcCircumfrence = (radius) => {
  let result = 2 * Math.PI * radius;
  console.log(`The circumference is ${result}`);
};

calcCircumfrence(2.9);

let calcArea = (radius) => {
  let result = Math.PI * radius * radius;
  console.log(`The area is ${result}`);
};

calcArea(2.9);

//7
const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852,
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905,
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
  },
];
//7a
let findInventorsBornedBetween = (from, last) => {
  const result = [];
  for (let i = 0; i < inventors.length; i++) {
    const inventor = inventors[i];
    if (inventor.year >= from && inventor.year < last) {
      result.push(inventor);
    }
  }
  return result;
};

console.log(findInventorsBornedBetween(1500, 1600));

//7b

let orderYears = inventors.sort((a, b) => {
  let resultorder = [];
  if (a.year > b.year) {
    resultorder.push(1);
  } else {
    resultorder.push(-1);
  }
  return resultorder;
});

console.log(orderYears);

//7c
function findLastandFirstNameInventors(inventors) {
  const result = [];
  for (let i = 0; i < inventors.length; i++) {
    const inventor = inventors[i];
    result.push(`${inventor.first} ${inventor.last}`);
  }
  return result;
}
console.log(findLastandFirstNameInventors(inventors));

//8
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];
