document.addEventListener('DOMContentLoaded', () => {
  // Get the window and its header elements
  const windowElement = document.getElementById('window');
  const headerElement = document.getElementById('welcomeheader');

  // Add event listeners to the header element
  let isDragging = false;
  let startX, startY, initialX, initialY;

  headerElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = windowElement.offsetLeft;
    initialY = windowElement.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      windowElement.style.left = `${initialX + deltaX}px`;
      windowElement.style.top = `${initialY + deltaY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});