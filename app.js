// Toggle mobile menu
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    const closeIcon = document.getElementById('close');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      hamburger.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });