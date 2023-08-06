import Swiper, {
    Pagination, Navigation,
} from 'swiper';

Swiper.use([Pagination, Navigation]);

    if (document.querySelector('.home-hero__swiper')) {
        new Swiper('.home-hero__swiper', {
            loop: true,
            speed: 800,
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 15,

            navigation: {
                nextEl: '.home-hero__button--next',
                prevEl: '.home-hero__button--prev',
            },

            pagination: {
                el: '.home-hero__pagination',
                clickable: true,
            },
        });
    }
