document.querySelectorAll('.col').forEach((col, index) => {
  col.addEventListener('click', () => {
    // Check if the clicked column is already expanded
    if (col.classList.contains('expanded')) return;

    // Remove 'expanded' and 'shrink' classes from all columns
    document.querySelectorAll('.col').forEach(c => {
      c.classList.remove('expanded', 'shrink');
    });

    // Add 'expanded' class to the clicked column
    col.classList.add('expanded');

    // Add 'shrink' class to the other columns
    document.querySelectorAll('.col:not(.expanded)').forEach(c => {
      c.classList.add('shrink');
    });

    // Handle image toggling based on column index
    document.querySelectorAll('.container-fluid img').forEach(img => {
      img.classList.add('d-none');
    });

    if (index === 0) {
      document.querySelector('.s-img').classList.remove('d-none');
      document.querySelector('.f-content').classList.remove('d-none');
      document.querySelector('.s-content').classList.add('d-none');
      document.querySelector('.t-content').classList.add('d-none');
      document.querySelector('.f-plus').classList.add('d-none');

    } else if (index === 1) {
      document.querySelector('.t-img').classList.remove('d-none');
      document.querySelector('.f-content').classList.add('d-none');
      document.querySelector('.s-content').classList.remove('d-none');
      document.querySelector('.t-content').classList.add('d-none');
      document.querySelector('.s-plus').classList.add('d-none');
    } else if (index === 2) {
      document.querySelector('.f-img2').classList.remove('d-none');
      document.querySelector('.f-content').classList.add('d-none');
      document.querySelector('.s-content').classList.add('d-none');
      document.querySelector('.t-content').classList.remove('d-none');
      document.querySelector('.t-plus').classList.add('d-none');

    }
  });

  // Add event listener to the shrink button inside the column
  col.querySelector('.shrink-btn').addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the column click event from firing

    // Remove 'expanded' and 'shrink' classes from all columns
    document.querySelectorAll('.col').forEach(c => {
      c.classList.remove('expanded', 'shrink');
    });

    // Reset the image visibility
    document.querySelector('.f-img').classList.remove('d-none');
    document.querySelector('.s-img').classList.add('d-none');
    document.querySelector('.t-img').classList.add('d-none');
    document.querySelector('.f-img2').classList.add('d-none');
    document.querySelector('.f-content').classList.add('d-none');
    document.querySelector('.s-content').classList.add('d-none');
    document.querySelector('.t-content').classList.add('d-none');
    document.querySelector('span').classList.remove('d-none');
    document.querySelector('.f-plus').classList.remove('d-none');
    document.querySelector('.s-plus').classList.remove('d-none');
    document.querySelector('.t-plus').classList.remove('d-none');
  });
});

const element = document.getElementById('scrollingText');
