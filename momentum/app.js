// Variable

// const and let
const a = 5;
const b = 2;
let myName = 'nico';

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log('hello ' + myName);

myName = 'nicolas';

console.log('your new name is ' + myName);

// Boolean
// true, false, null, undefined
const amIFat = null;
console.log(amIFat);

let something;
console.log(something);

// Arrays

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
console.log(daysOfWeek);

// Get item from array
console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push('sun');
console.log(daysOfWeek);

// Objects
const playerName = 'nico';
const playerPoints = 121212;
const playerHansome = false;
const playerFat = 'little bit';

const player = {
  name: 'nico',
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player['name']);

player.fat = false;
console.log(player);

// Functions
function sayHello(nameOfPerson, age) {
  console.log('Hello my name is ' + nameOfPerson + " and I'm " + age);
}

sayHello('nico', 10);
sayHello('dal', 23);
sayHello('lynn', 21);

function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8, 60);
divide(98, 20);

const player2 = {
  name: 'nico',
  sayHello: function (otherPersonsName) {
    console.log('hello ' + otherPersonsName + ' nice to meet you!');
  },
};

console.log(player2.name);
player2.sayHello('lynn');
player2.sayHello('nico');

// Returns
const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);

// Conditionals
const age2 = parseInt(prompt('How old are you?'));

console.log(isNaN(age2));

// if (isNaN(age2)) {
//   console.log('Please write a number');
// } else {
//   console.log('Thank you for writing your age');
// }

if (isNaN(age2) || age2 < 0) {
  console.log('Please write a real positive number');
} else if (age2 < 18) {
  console.log('You are too young');
} else if (age2 >= 18 && age2 <= 50) {
  console.log('You can drink');
} else if (age2 > 50 && age2 <= 80) {
  console.log('You should exercise');
} else if (age2 === 100) {
  console.log('wow you are wise');
} else if (age2 > 80) {
  console.log('You can do whatever you want');
}
