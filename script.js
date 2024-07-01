//navbar

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
  function applyHoverEffect() {
    if ($(window).width() > 1024) {
      $(".meeting-img img, .meeting-img .meeting-btn").hover(
        function () {
          $(".meeting-caption").addClass("meeting-hidden");
          $(".meeting-btn").removeClass("d-none");
        },
        function () {
          $(".meeting-caption").removeClass("meeting-hidden");
          $(".meeting-btn").addClass("d-none");
        }
      );
    } else {
      // Remove hover event if screen width is 1024px or below
      $(".meeting-img img, .meeting-img .con1-btn").off('mouseenter mouseleave');
      $(".meeting-caption").removeClass("meeting-hidden");
      $(".meeting-btn").addClass("d-none");
    }
  }

  // Initial check
  applyHoverEffect();

  // Reapply on window resize
  $(window).resize(function () {
    applyHoverEffect();
  });
});

//hmmm2

$(document).ready(function () {
  function applyHoverEffect() {
    if ($(window).width() > 1024) {
      $(".restaurant-img img, .restaurant-img .restaurant-btn").hover(
        function () {
          $(".restaurant-caption").addClass("restaurant-hidden");
          $(".restaurant-btn").removeClass("d-none");
        },
        function () {
          $(".restaurant-caption").removeClass("restaurant-hidden");
          $(".restaurant-btn").addClass("d-none");
        }
      );
    } else {
      // Remove hover event if screen width is 1024px or below
      $(".restaurant-img img, .restaurant-img .restaurant-btn").off('mouseenter mouseleave');
      $(".restaurant-caption").removeClass("restaurant-hidden");
      $(".restaurant-btn").addClass("d-none");
    }
  }

  // Initial check
  applyHoverEffect();

  // Reapply on window resize
  $(window).resize(function () {
    applyHoverEffect();
  });
});

//reservation

const reservation = document.getElementById("reservation");
const showOnScrollPosition = 800; // Adjust this value based on when you want the navbar to appear
let isNavbarVisible = false;

window.addEventListener("scroll", () => {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > showOnScrollPosition && !isNavbarVisible) {
    reservation.classList.remove("reservation-hidden");
    reservation.classList.add("reservation-fixed");
    isNavbarVisible = true;
  } else if (scrollTop <= showOnScrollPosition && isNavbarVisible) {
    reservation.classList.add("reservation-hidden");
    reservation.classList.remove("reservation-fixed");
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

// scroll to top

$(window).scroll(function() {
  if ($(this).scrollTop() > 500 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
      $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".image-slider").offset().top},"1000");return false})})