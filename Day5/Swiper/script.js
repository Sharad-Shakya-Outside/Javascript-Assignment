import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const togglerButton = document.querySelector('.toggler');
const navbar = document.querySelector('.navbar--collapse');
const header = document.querySelector('.header');

const navbarThreshold = 150;

togglerButton.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
})

window.addEventListener("scroll", handleScrollForNavbar);
window.addEventListener("resize", handleScrollForNavbar);

function handleScrollForNavbar() {

    if (window.innerWidth > 768) {

        if (window.scrollY > navbarThreshold) {
            header.style.margin = "0";
            header.style.borderRadius = "0";
        } else {
            header.style.margin = "3rem 4rem 2rem 4rem";
            header.style.borderRadius = "40px";
        }
    } else {
        header.style.margin = "";
        header.style.borderRadius = "";
    }
}

const swiperYourPick = new Swiper('.swiper-your-pick', {
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

const swiperTrending = new Swiper('.swiper-trending', {
    loop: true,

    spaceBetween: 80,
    slidesPerView: "auto",
    speed: 1000,

    //autoplay feature
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination-t",
        clickable: true,
    },
});
