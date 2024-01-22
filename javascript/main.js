// Inicializa el Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });