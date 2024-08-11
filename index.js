document.addEventListener('DOMContentLoaded', (event) => {
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');

  burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });

  document.getElementById('phoneNumber').addEventListener('click', () => {
    const phoneNumber = '+27-78-746-0853';

    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert('Phone number copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  });
});
