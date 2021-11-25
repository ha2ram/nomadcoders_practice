// The Document Object
console.dir(document);

// document.title = 'Hello! From JS';

// HTML in JavaScript
const title = document.getElementById('title');
// const title = document.querySelector('#title');

console.dir(title);

title.innerText = 'Got you!';

console.log(title.id);
console.log(title.className);

// Searching For Elements
const hellos = document.getElementsByClassName('hello');

console.log(hellos);

const title2 = document.getElementsByTagName('h1'); // array

console.log(title2);

const title3 = document.querySelector('.hello h1');

console.log(title3);

const title4 = document.querySelectorAll('.hello h1'); // array

console.log(title4);
