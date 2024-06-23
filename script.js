// // navbar

// const navbar = document.getElementById('navbar');
// let lastScrollTop = 0;

// window.addEventListener('scroll', () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop === 0) { // At the top
//     navbar.classList.remove('navbar-black');
//   } else if (scrollTop < lastScrollTop) { // Scrolling up
//     navbar.classList.remove('navbar-hidden');
//     navbar.classList.add('navbar-fixed', 'navbar-black');
//   } else { // Scrolling down
//     navbar.classList.add('navbar-hidden');
//     navbar.classList.remove('navbar-fixed', 'navbar-black');
//   }

//   lastScrollTop = scrollTop;
// });


// document.addEventListener('DOMContentLoaded', function () {
//   let lastScrollTop = 0;
//   const navbar = document.getElementById('navbar');
//   let isHidden = false;

//   window.addEventListener('scroll', function () {
//       let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       if (scrollTop > lastScrollTop && !isHidden) {
//           // Scroll down
//           navbar.style.transform = 'translateY(-100%)';
//           isHidden = true;
//       }
//       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
//   }, false);
// });


// rooms splide

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    drag: "free",
    padding: "10%",
    pagination: false,
    drag: false,
    autoScroll: {
      speed: 0.5,
    },
    breakpoints: {
      991: {
        perPage: 1,
        arrows: false,
        drag: true,
      }
    },
  }).mount(window.splide.Extensions);
});


// hmmmm

$(document).ready(function () {
  $(".hmmm-img img, .hmmm-img .con1-btn").hover(
    function () {
      $(".hmmm-caption").addClass("hidden");
      $(".con1-btn").removeClass("d-none");
    },
    function () {
      $(".hmmm-caption").removeClass("hidden");
      $(".con1-btn").addClass("d-none");
    }
  );
});

$(document).ready(function () {
  // Check if the screen size is large enough
  if (window.matchMedia("(min-width: 1024px)").matches) {
    // Apply hover effect only on large screens and above
    $(".hmmm-img2 img, .hmmm-img2 .con2-btn").hover(
      function () {
        $(".hmmm-caption2").addClass("hidden-left");
        $(".con2-btn").removeClass("d-none");
      },
      function () {
        $(".hmmm-caption2").removeClass("hidden-left");
        $(".con2-btn").addClass("d-none");
      }
    );
  }
});



// Function to add class on hover for medium screens and below
// function addClassOnHoverForMediumAndBelow() {
//   // Check if viewport width is medium screen or below
//   if (window.matchMedia("(max-width: 992px)").matches) {
//     // Add event listener for mouseenter
//     document.querySelector('.hmmm-caption2').addEventListener('mouseenter', function() {
//       // Add your class on hover
//       this.classList.add('hidd');
//     });

//     // Remove class when mouse leaves
//     document.querySelector('.hmmm-caption2').addEventListener('mouseleave', function() {
//       // Remove your class when mouse leaves
//       this.classList.remove('hidd');
//     });
//   }
// }

// // Call the function on page load
// addClassOnHoverForMediumAndBelow();

// // Call the function whenever the window is resized
// window.addEventListener('resize', addClassOnHoverForMediumAndBelow);








//reservation

const navbar = document.getElementById("reservation");
const showOnScrollPosition = 800; // Adjust this value based on when you want the navbar to appear
let isNavbarVisible = false;

window.addEventListener("scroll", () => {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > showOnScrollPosition && !isNavbarVisible) {
    navbar.classList.remove("reservation-hidden");
    navbar.classList.add("reservation-fixed");
    isNavbarVisible = true;
  } else if (scrollTop <= showOnScrollPosition && isNavbarVisible) {
    navbar.classList.add("reservation-hidden");
    navbar.classList.remove("reservation-fixed");
    isNavbarVisible = false;
  }
});





//testimonial

jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});