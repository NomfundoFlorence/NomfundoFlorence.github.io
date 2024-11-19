document.addEventListener('DOMContentLoaded', (event) => {
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');
  const navItems = navLinks.getElementsByTagName('a');

  burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });

  for (let item of navItems) {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      burgerMenu.classList.remove('active');
    });
  }

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
  // scroller
});

let scrollOffset = 0; // Tracks current scroll position

function scrollImages(direction) {
  const scrollerContainer = document.getElementById('scroller-container');
  const visibleWidth = scrollerContainer.parentElement.clientWidth; // Visible area width
  const totalImages = scrollerContainer.children.length; // Number of images
  const imageWidth = scrollerContainer.children[0].clientWidth + 10; // Image width + gap
  const maxScroll = Math.max(0, imageWidth * totalImages - visibleWidth); // Maximum scroll value

  // Update scroll offset based on direction
  if (direction > 0) {
    // Scroll right to the last visible position
    scrollOffset = maxScroll;
  } else {
    // Scroll left to the first position
    scrollOffset = 0;
  }

  // Apply the scroll
  scrollerContainer.style.transform = `translateX(-${scrollOffset}px)`;
}

function updateScrollButtons() {
  const scrollerContainer = document.getElementById('scroller-container');
  const visibleWidth = scrollerContainer.parentElement.clientWidth;
  const totalImages = scrollerContainer.children.length;
  const imageWidth = scrollerContainer.children[0].clientWidth + 10; // Image width + gap
  const totalWidth = imageWidth * totalImages;

  // Hide buttons if no scrolling is needed
  document.querySelector('.prev').style.display =
    totalWidth > visibleWidth ? 'block' : 'none';
  document.querySelector('.next').style.display =
    totalWidth > visibleWidth ? 'block' : 'none';
}

// Call this function on page load or window resize
window.addEventListener('resize', updateScrollButtons);
document.addEventListener('DOMContentLoaded', updateScrollButtons);
