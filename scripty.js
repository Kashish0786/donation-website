new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // pagination bullet
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    //responsive slide
    breakpoints: {
      0:{
        slidesPeerView:1
      },

      786:{
        slidesPeerView:2
      },

      1024:{
        slidesPeerView:3
      },
    }
    
  });