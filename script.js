let header = document.querySelector('header');

var swiper = new Swiper(".'coming'-container", {
    spaceBetween: 30,
    centeredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      
    },
  });

  