// Get a reference to the form element
const form = document.getElementById('booking-form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;
  const message = document.getElementById('message').value;

  // Confirm the booking
  alert(`Thank you for booking a table, ${name}!
  We look forward to seeing you
  and your party of ${guests}
  on ${date}
  at ${time}.`);

  // Clear the form
  form.reset();
});