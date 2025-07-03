// Grab elements
const emailInput      = document.getElementById('email');
const passwordInput   = document.getElementById('password');
const emailErrorSpan  = document.getElementById('emailError');
const passErrorSpan   = document.getElementById('passwordError');
const formErrorPara   = document.getElementById('formError');
const contactForm     = document.getElementById('contactForm');

// Validation helpers
const isValidEmail    = value => value.trim() !== '' && value.includes('@');
const isValidPassword = value => value.length >= 6;

// Toggle error message visibility
function showError(span, message) {
  span.textContent = message;
  span.style.display = 'block';
}
function hideError(span) {
  span.textContent = '';
  span.style.display = 'none';
}

// Individual field listeners
emailInput.addEventListener('input', () => {
  isValidEmail(emailInput.value)
    ? hideError(emailErrorSpan)
    : showError(emailErrorSpan, 'Please enter a valid email address');
});

passwordInput.addEventListener('input', () => {
  isValidPassword(passwordInput.value)
    ? hideError(passErrorSpan)
    : showError(passErrorSpan, 'Password must be at least 6 characters');
});

// Form submit listener
contactForm.addEventListener('submit', e => {
  e.preventDefault(); // stop default submission

  // Trigger validation once more in case user clicks straight away
  emailInput.dispatchEvent(new Event('input'));
  passwordInput.dispatchEvent(new Event('input'));

  const emailValid    = isValidEmail(emailInput.value);
  const passwordValid = isValidPassword(passwordInput.value);

  if (!emailValid || !passwordValid) {
    formErrorPara.textContent = 'Please fix the errors above.';
    formErrorPara.style.display = 'block';
  } else {
    formErrorPara.textContent = '';
    formErrorPara.style.display = 'none';
    console.log('Form submitted successfully!');
    // Do your AJAX / form submit action here
  }
});
