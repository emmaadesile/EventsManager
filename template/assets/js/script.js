// declare the variables for the login/signup pages
const loginForm    = document.querySelector('.form-login');
const signupForm   = document.querySelector('.form-signup');
const signupButton = document.querySelector('.signupButton');
const loginButton  = document.querySelector('.loginButton');


// create functions to show the login and signup pages
function showLoginForm() {
  loginForm.style.display = 'block';
  loginForm.style.opacity = 1;
}

function showSignupForm() {
  signupForm.style.display = 'block';
  signupForm.style.opacity = 1;
}

// Add event listeners to the signup and login buttons 
signupButton.addEventListener('click', showSignupForm);
loginButton.addEventListener('click', showLoginForm);