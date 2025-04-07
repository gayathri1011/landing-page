// Scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Toggle menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  