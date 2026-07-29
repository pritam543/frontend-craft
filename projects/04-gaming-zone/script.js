// ===== Scroll Animation =====
const fadeElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));


// ===== Navigation Highlight on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) link.classList.add('active');
  });
});


// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// ===== Button Glow + Sound =====
const buttons = document.querySelectorAll('.glow');
const clickSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_0e29500ce7.mp3?filename=click-124467.mp3');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.classList.add('active-glow'));
  btn.addEventListener('mouseleave', () => btn.classList.remove('active-glow'));
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});


// ===== Email Subscribe Toast =====
const form = document.querySelector('#subscribe-form');
const toast = document.querySelector('#toast');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  if (!email.includes('@')) {
    toast.textContent = "❌ Please enter a valid email.";
  } else {
    toast.textContent = "✅ Thanks for subscribing, gamer!";
  }
  toast.classList.add('show-toast');
  setTimeout(() => toast.classList.remove('show-toast'), 3000);
});
