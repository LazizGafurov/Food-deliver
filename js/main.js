const swiper = new Swiper('.swiper', {
 loop: true,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
    infinite: true
  },

});

const slider = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
    infinite: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
