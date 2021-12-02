// const loginForm = document.getElementById('login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

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

loginButton.addEventListener('click', onLoginBtnClick);
