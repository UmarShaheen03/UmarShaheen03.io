const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('mousemove', (event) => {
    const rect = circle.getBoundingClientRect();
    const circleCenterX = rect.left + rect.width / 2;
    const circleCenterY = rect.top + rect.height / 2;

    const offsetX = event.clientX - circleCenterX;
    const offsetY = event.clientY - circleCenterY;

    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);

    if (distance < 100) { // Cursor is within 100px range
      const repelX = offsetX / distance * 50; // Scale repel distance
      const repelY = offsetY / distance * 50;

      circle.style.transform = `translate(${repelX}px, ${repelY}px)`;
    }
  });

  circle.addEventListener('mouseleave', () => {
    circle.style.transition = 'transform 0.5s ease';
    circle.style.transform = 'translate(0, 0)';
  });
});
