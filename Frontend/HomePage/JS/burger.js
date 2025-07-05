function initializeBurgerMenu() {
  const burgerMenu = document.getElementById('burgerMenu');
  const nav = document.getElementById('nav');

  if (burgerMenu && nav) {
    burgerMenu.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      burgerMenu.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!burgerMenu.contains(e.target) && !nav.contains(e.target)) {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  } else {
    console.warn('Burger menu or nav not found.');
  }
}
