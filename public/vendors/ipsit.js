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

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
      $("#navbar").addClass("is-sticky");
      $("#navbar").removeClass("not-sticky");
      $("#brand-icon").addClass("border-black");
      $("#brand-icon").removeClass("border-white");
      $("#brand-name, #brand-subname").addClass("d-none");
      $("#brand-name, #brand-subname").removeClass("d-block");
      $("#menu-toggler-btn").removeClass("fs-1");
      $("#menu-toggler-btn").addClass("fs-3");
      $("#navbar").css({ "transition": "300ms" });
  }
  else {
      $("#navbar").removeClass("is-sticky");
      $("#navbar").addClass("not-sticky");
      $("#brand-icon").addClass("border-white");
      $("#brand-icon").removeClass("border-black");
      $("#brand-name, #brand-subname").addClass("d-block");
      $("#brand-name, #brand-subname").removeClass("d-none");
      $("#menu-toggler-btn").removeClass("fs-3");
      $("#menu-toggler-btn").addClass("fs-1");
      $("#navbar").css({ "transition": "300ms" });
  }
});

$(function(){
  $("#menu-toggler").hide();
  $("#menu-toggler-btn").on('click', function(){
    $("#menu-toggler").fadeIn('slow');
    $("#menu-toggler-btn").fadeOut('slow');
  });
  $("#menu-close-btn").on('click', function(){
    $("#menu-toggler").fadeOut('slow');
    $("#menu-toggler-btn").fadeIn('slow');
  });
});