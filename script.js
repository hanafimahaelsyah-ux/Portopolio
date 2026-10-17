const themeToggle = document.querySelector('#themeToggle');
const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const helloButton = document.querySelector('#helloButton');
const helloFeedback = document.querySelector('#helloFeedback');

// Toggle antara tema gelap dan terang.
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isLight ? 'Aktifkan tema gelap' : 'Aktifkan tema terang');
});

// Menu navigasi untuk layar kecil.
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// Sapaan interaktif.
helloButton.addEventListener('click', () => {
  helloFeedback.textContent = 'Hai juga! 👋 Terima kasih sudah mampir. Semoga harimu menyenangkan!';
  helloButton.innerHTML = 'Sapaan terkirim <span>✓</span>';
});

// Animasi elemen saat masuk ke layar.
const revealElements = document.querySelectorAll(
  '.section-kicker, .section-heading, .stat-card, .interest-item, .contact-card'
);
revealElements.forEach((element) => element.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}
