document.addEventListener('DOMContentLoaded', (event) => {
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
