// CSS in JavaScript
const h1 = document.querySelector('div.hello:first-child h1');

// 1.
// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === 'blue') {
//     newColor = 'tomato';
//   } else {
//     newColor = 'blue';
//   }
//   h1.style.color = newColor;
// }

// 2.
// function handleTitleClick() {
//   const clickedClass = 'clicked';
//   if (h1.className === clickedClass) {
//     h1.className = '';
//   } else {
//     h1.className = clickedClass;
//   }
// }

// 3.
// function handleTitleClick() {
//   const clickedClass = 'clicked';
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// 4.
function handleTitleClick() {
  h1.classList.toggle('clicked');
}

h1.addEventListener('click', handleTitleClick);
