const toggleButton = document.getElementById('theme-toggle');

function updateThemeLabel() {
  const isDark = document.body.classList.contains('dark-mode');
  toggleButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateThemeLabel();
});
updateThemeLabel();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
