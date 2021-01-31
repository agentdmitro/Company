var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3900,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');

};

menu_list.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');

};

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
0
  /*с подключением библиотеки jquery:
  
  $(document).ready(function() {
      $('.header__burger').click(function(event) {
          $('.header__burger,.header__menu').toggleClass('active');
          $('body').toggleClass('lock');
      });
  });
  
  // закрытие меню при клике на ссылку
  $(document).ready(function() {
      $('.header__list').click(function(event) {
          $('.header__burger,.header__menu').toggleClass('active');
          $('body').toggleClass('lock');
      });
  });*/
  
  


