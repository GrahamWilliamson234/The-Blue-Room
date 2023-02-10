const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const guestsInput = document.getElementById('guests');

// Add event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  if (validateForm()) {
    submitForm();
  }
});

// Function to validate the form
function validateForm() {
  let valid = true;

  // Check if name is empty
  if (nameInput.value.trim() === '') {
    setErrorFor(nameInput, 'Name is required');
    valid = false;
  } else {
    setSuccessFor(nameInput);
  }

  // Check if email is valid
  if (emailInput.value.trim() === '') {
    setErrorFor(emailInput, 'Email is required');
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    setErrorFor(emailInput, 'Invalid email address');
    valid = false;
  } else {
    setSuccessFor(emailInput);
  }

  // Check if phone is valid
  if (phoneInput.value.trim() === '') {
    setErrorFor(phoneInput, 'Phone number is required');
    valid = false;
  } else if (!isValidPhone(phoneInput.value.trim())) {
    setErrorFor(phoneInput, 'Invalid phone number');
    valid = false;
  } else {
    setSuccessFor(phoneInput);
  }

  // Check if guests is valid
  if (guestsInput.value < 1) {
    setErrorFor(guestsInput, 'Number of guests must be at least 1');
    valid = false;
  } else {
    setSuccessFor(guestsInput);
  }

  return valid;
}

// Function to display error message for an input field
function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const errorText = formGroup.querySelector('.error-text');
  formGroup.className = 'form-group error';
  errorText.innerText = message;
}

// Function to display success message for an input field
function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
}

// Function to check if an email address is valid
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to check if a phone number is valid
function isValidPhone(phone) {
  const regex = /^\d{10}$/;
  return regex.test(phone);
}

// Function to submit the form
function submitForm() {
  // You can write your own implementation here to submit the form to the server
  alert('Form submitted successfully!');
}