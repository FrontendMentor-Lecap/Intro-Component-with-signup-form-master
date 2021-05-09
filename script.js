// Form and Components
const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // Get values from inputs
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === '') {
    setErrorFor(firstname, 'First Name cannot be empty');
  }

  if (lastnameValue === '') {
    setErrorFor(lastname, 'Last Name cannot be empty');
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email Address cannot be empty');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email');
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  }
}

function setErrorFor(input, message) {
  const inputContainer = input.parentElement;
  const errorMessage = inputContainer.querySelector('.error__message');

  // add error message
  errorMessage.innerText = message;

  // add error class
  inputContainer.className = 'input__container error';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
