// const loginForm = document.getElementById('login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector('#login-form button');

function onLoginBtnClick() {
  // console.log('click!!!!');
  // console.dir(loginInput);

  // console.log(loginInput.value);

  const username = loginInput.value;
  // if (username === '') {
  //   alert('Please write your name');
  // } else if (username.length > 15) {
  //   alert('Your name is too long');
  // }
  console.log(username);
}

// loginButton.addEventListener('click', onLoginBtnClick);

// SubmitEvent
const loginForm = document.querySelector('#login-form');

const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
  // event에 대한 정보를 담아줌
  event.preventDefault(); // 브라우저의 기본 동작(submit 새로고침)을 막아줌
  // console.log(loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);

// MouseEvent
const link = document.querySelector('a');

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  // alert('clicked'); // 브라우저의 모든 동작을 막음
}

// link.addEventListener('click', handleLinkClick);
