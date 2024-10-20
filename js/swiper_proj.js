// import Swiper JS
import Swiper from '../node_modules/swiper/swiper-bundle.min.mjs';
// import Swiper styles
// import '../node_modules/swiper/types';

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 15000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
console.log("ok")
