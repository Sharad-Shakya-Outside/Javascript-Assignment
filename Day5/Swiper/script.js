import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    loop: true,

    //coverflow effect
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 3,
    centeredSlides: true,
    coverflowEffect: {
        rotate: -50,
        stretch: 40,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});