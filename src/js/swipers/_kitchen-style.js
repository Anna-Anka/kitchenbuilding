import Swiper, {
    Navigation,
} from 'swiper';

Swiper.use([Navigation]);

    if (document.querySelector('.kitchen-style__swiper')) {
        new Swiper('.kitchen-style__swiper', {
            loop: true,
            speed: 800,
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 15,

            navigation: {
                nextEl: '.kitchen-style__button--next',
                prevEl: '.kitchen-style__button--prev',
            },
        });
    }
