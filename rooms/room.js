// book modal

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('#room-name')

    modalBodyInput.value = recipient
  })
}

// navbar

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
    // Downscroll and past navbar height
    navbar.classList.add('navbar-hidden'); // Apply hidden class to hide navbar
  } else {
    // Upscroll or at the top
    navbar.classList.remove('navbar-hidden'); // Remove hidden class to show navbar
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});