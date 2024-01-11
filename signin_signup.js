document.addEventListener('DOMContentLoaded', function () {
  let reg_signin = document.getElementById("reg-signin");
  let outerdiv1 = document.querySelector(".outerdiv1");
  let outerdiv2 = document.querySelector(".outerdiv2");
  let createacc = document.getElementById("createaccount");

  createacc.addEventListener('click', () => {
    outerdiv2.classList.remove("displayProperty");
    outerdiv1.classList.add("displayProperty");
    clearErrorMessages();
  });

  reg_signin.addEventListener('click', () => {
    outerdiv1.classList.remove('displayProperty');
    outerdiv2.classList.add('displayProperty');
    clearErrorMessages();
  });
});

document.querySelector('.innerButton').addEventListener('click', function (event) {
  event.preventDefault();

  // Get the form fields
  var email = document.getElementById('mob_email');
  var password = document.getElementById('ap_password');
  var name = document.getElementById('name');
  var regEmail = document.getElementById('email');
  var regPassword = document.getElementById('reg_password');

  // Get the error message containers
  var emailError = document.getElementById('email-error');
  var passwordError = document.getElementById('password-error');

  // Clear previous error messages
  emailError.textContent = '';
  passwordError.textContent = '';

  // Validate the sign in form
  if (!email.value) {
    emailError.textContent = 'Please enter your email or mobile phone number.';
  }

  if (!password.value) {
    passwordError.textContent = 'Please enter your password.';
  }

  // Validate the registration form
  if (!name.value) {
    nameError.textContent = 'Please enter your name.';
  }

  if (!regEmail.value) {
    regEmailError.textContent = 'Please enter your email.';
  }

  if (!regPassword.value || regPassword.value.length < 6) {
    regPasswordError.textContent = 'Password must be at least 6 characters.';
  }
});
document.querySelector('.innerButton').addEventListener('click', function (event) {
  event.preventDefault();

  // Get the form fields
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var password = document.getElementById('reg_password');
  var cnfPassword = document.getElementById('cnf_password');

  // Get the error message containers
  var nameError = document.getElementById('name-error');
  var emailError = document.getElementById('email-signup-error');
  var passwordError = document.getElementById('password-signup-error');
  var cnfPasswordError = document.getElementById('cnf-password-error');

  // Clear previous error messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  cnfPasswordError.textContent = '';

  // Validate the sign up form
  if (!name.value) {
    nameError.textContent = 'Please enter your name.';
  }

  if (!email.value) {
    emailError.textContent = 'Please enter your email.';
  }

  if (!password.value || password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
  }

  if (password.value !== cnfPassword.value) {
    cnfPasswordError.textContent = 'Passwords do not match.';
  }
});






