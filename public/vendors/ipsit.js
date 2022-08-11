$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    center: true,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    responsive: {
      0: {
        nav: false,
      },
      600: {
        nav: true,
      },
      1000: {
        nav: true,
      }
    }
  });
  $('.testmonial-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    responsive: {
      0: {
        nav: false,
      },
      600: {
        nav: true,
      },
      1000: {
        nav: true,
      }
    }
  });


});
