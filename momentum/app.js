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

