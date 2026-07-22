document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');
  const enrollButtons = document.querySelectorAll('.enroll-btn');

  // Category Filter Functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');

      // Filter course cards
      courseCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Enroll Button Click Interactivity
  enrollButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const cardTitle = e.target.parentElement.querySelector('h3').innerText;

      if (!button.classList.contains('enrolled')) {
        button.classList.add('enrolled');
        button.innerText = '✓ Enrolled';
        alert(`Successfully enrolled in: ${cardTitle}`);
      } else {
        button.classList.remove('enrolled');
        button.innerText = 'Enroll Now';
        alert(`Cancelled enrollment for: ${cardTitle}`);
      }
    });
  });
});