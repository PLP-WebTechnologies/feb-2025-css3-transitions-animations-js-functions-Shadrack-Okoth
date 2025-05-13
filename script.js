const toggleButton = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.classList.add(savedTheme);
});

// Toggle theme and save to localStorage
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  // Trigger animation
  toggleButton.classList.add('clicked');
  setTimeout(() => toggleButton.classList.remove('clicked'), 500);

  // Save preference
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});
