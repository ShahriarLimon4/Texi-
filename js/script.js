$(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    center: true,
    dots: true,
    responsiveClass: true,
    responsive:{
      0:{
          items: 1 
      },
      600:{
          items: 2
      },
      1200:{
          items: 3
      },
      1400:{
        items: 3
      }
  }
  });
  