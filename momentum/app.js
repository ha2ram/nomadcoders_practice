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
