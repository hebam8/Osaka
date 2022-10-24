$(document).ready(function(){
$(".slider-wraper").owlCarousel({
   loop: true,
   nav: true,
   margin:15,
   autoplay: true,
   dots: false,
   responsive: {
      0: {
         items:1,
         nav: false,
      },
      700: {
         items:2,
         nav: true,
      },
      1000: {
         items:3,
         nav: true,
      }
   },
});

});

$(document).ready(function(){
   $(".slider-wraper2").owlCarousel({
      loop: true,
      items:1,
      margin:15,
      autoplay: true,
      dots: false,
   });
   
   });
   
