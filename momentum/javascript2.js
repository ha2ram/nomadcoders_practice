// The Document Object
console.dir(document);

// document.title = 'Hello! From JS';

// HTML in JavaScript
const title = document.getElementById('title');
// const title = document.querySelector('#title');

console.dir(title);

// title.innerText = 'Got you!';

// console.log(title.id);
// console.log(title.className);

// Searching For Elements
const hellos = document.getElementsByClassName('hello');

console.log(hellos);

const title2 = document.getElementsByTagName('h1'); // array

console.log(title2);

const title3 = document.querySelector('.hello h1');

console.log(title3);

const title4 = document.querySelectorAll('.hello h1'); // array

console.log(title4);

// Events
const title5 = document.querySelector('div.hello h1');

console.dir(title5);

function handleTitleClick() {
  title5.style.color = 'blue';
  console.log('title was clicked!');
}

function handleMouseEnter() {
  title5.innerText = 'Mouse is here!';
}

function handleMouseLeave() {
  title5.innerText = 'Mouse is gone!';
}

// title5.addEventListener('click', handleTitleClick);
// title5.addEventListener('mouseenter', handleMouseEnter);
// title5.addEventListener('mouseleave', handleMouseLeave);

title5.onclick = handleTitleClick;
title5.onmouseenter = handleMouseEnter;
title5.onmouseleave = handleMouseLeave;

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
  alert('copier!');
}

function handleWindowOffline() {
  alert('SOS no WIFI');
}

function handleWindowOnline() {
  alert('ALL GOOOD');
}

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
