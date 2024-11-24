import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const togglerButton = document.querySelector('.toggler');
const navbar = document.querySelector('.navbar--collapse')

togglerButton.addEventListener('click', () => {
    navbar.classList.toggle('hidden');;
})

const swiperYourPick = new Swiper('.swiperYourPick', {
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

const swiperTrending = new Swiper('.swiperTrending', {
    loop: true,

    spaceBetween: 80,
    slidesPerView: "auto",
    speed: 6000,
    allowTouchMove: false,

    //autoplay feature
    autoplay: {
        delay: 1,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //responsive breakpoints
    // breakpoints: {
    //     640: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetween: 40,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 50,
    //     },
    // },
});