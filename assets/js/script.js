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


//carousel
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }
  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  currentIndex = index;
}

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

showSlide(currentIndex);
