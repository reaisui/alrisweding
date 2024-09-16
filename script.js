// Get elements
const popupInvitation = document.getElementById('popup-invitation');
const openButton = document.getElementById('open-invitation');
const mainContent = document.getElementById('main-content');
const weddingMusic = document.getElementById('wedding-music');
const musicControl = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');
const footer = document.querySelector('.footer'); // Access the footer element

// Function to open invitation and start the music
function openInvitation() {
  popupInvitation.classList.add('hidden');
  mainContent.classList.remove('hidden');
  weddingMusic.play();
  musicIcon.classList.add('spin');

  // Show footer after invitation is opened
  footer.classList.remove('hidden-footer'); // Display the footer when invitation is opened
}

// Automatically start music
window.onload = function () {
  weddingMusic.play();
  musicIcon.classList.add('spin');
};

// Toggle music play/pause
let isPlaying = true;
musicControl.addEventListener('click', () => {
  if (isPlaying) {
    weddingMusic.pause();
    musicIcon.classList.remove('spin');
  } else {
    weddingMusic.play();
    musicIcon.classList.add('spin');
  }
  isPlaying = !isPlaying;
});

// Countdown timer
const weddingDate = new Date('October 6, 2024 10:00:00').getTime();
const countdown = document.getElementById('countdown-wrapper');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById('countdown-wrapper').innerHTML = "Acara telah dimulai!";
  }
}

// Update countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Disqus integration
var disqus_config = function () {
  this.page.url = window.location.href;
  this.page.identifier = window.location.pathname;
};

(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://yourdisqusshortname.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

// Text animation in footer
const textElement = document.getElementById('animated-text');
const texts = ['2024 created by kemiri tech', 'contact 082115335242'];
let index = 0;

setInterval(() => {
  textElement.style.opacity = 0; // Fade out

  setTimeout(() => {
    textElement.textContent = texts[index]; // Change text
    textElement.style.opacity = 1; // Fade in
    index = (index + 1) % texts.length; // Loop through texts
  }, 1000); // Time for fade-out effect
}, 4000); // Change text every 4 seconds
