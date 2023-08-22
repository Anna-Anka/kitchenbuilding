import Swiper, {
    Pagination, Navigation, Scrollbar,
} from 'swiper';

Swiper.use([Pagination, Navigation, Scrollbar]);

if (document.querySelector('.other-articles__swiper')) {
    const swiper = document.querySelector('.other-articles__swiper')
    new Swiper(swiper, {
        loop: true,
        speed: 800,

        navigation: {
            nextEl: swiper.querySelector('.other__button--next'),
            prevEl: swiper.querySelector('.other__button--prev'),
        },

        pagination: {
            el: swiper.querySelector('.other__pagination'),
            clickable: true,
        },

        scrollbar: {
            el: swiper.querySelector('.other__scrollbar'),
            draggable: true
        },

        breakpoints: {
            1100: {
                slidesPerGroup: 4,
                slidesPerView: 4,
                spaceBetween: 26,
            },

            560: {
                slidesPerGroup: 2,
                slidesPerView: 2.2,
                spaceBetween: 10,
            },

            320: {
                slidesPerGroup: 1,
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
        },
    });
}