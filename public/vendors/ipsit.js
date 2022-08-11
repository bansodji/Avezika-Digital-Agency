$(document).ready(function () {

  //owl carousel
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

});

//On scroll change navbar
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
      $("#avezika-icon").addClass("f-black");
      $("#avezika-icon").removeClass("fff");
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
      $("#avezika-icon").addClass("fff");
      $("#avezika-icon").removeClass("f-black");
      $("#navbar").css({ "transition": "300ms" });
  }
});

//Menu toggler
$(function(){
  $("#menu-toggler").hide();
  $("#menu-toggler-btn").on('click', function(){
    $("#menu-toggler").fadeIn();
    $("#menu-toggler-btn").fadeOut('slow');
    $("#navbar").fadeOut();
  });
  $("#menu-close-btn").on('click', function(){
    $("#menu-toggler").fadeOut();
    $("#menu-toggler-btn").fadeIn('slow');
    $("#navbar").fadeIn();
  });  
  $(".route-redirect").on('click', function(){
    $("#menu-toggler").fadeOut();
    $("#navbar").fadeIn();
    $("#menu-toggler-btn").fadeIn('slow');
  });
});
