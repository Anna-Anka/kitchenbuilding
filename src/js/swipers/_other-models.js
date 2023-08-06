import Swiper, {
    Pagination, Navigation, Scrollbar,
} from 'swiper';

Swiper.use([Pagination, Navigation, Scrollbar]);

if (document.querySelector('.other-models__swiper')) {
    new Swiper('.other-models__swiper', {
        loop: true,
        speed: 800,

        navigation: {
            nextEl: '.other-models__button--next',
            prevEl: '.other-models__button--prev',
        },

        pagination: {
            el: '.other-models__pagination',
            clickable: true,
        },

        scrollbar: {
            el: ".other-models__scrollbar",
            draggable: true
        },

        breakpoints: {
            1100: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 26,
            },

            768: {
                slidesPerGroup: 4,
                slidesPerView: 4.6,
                spaceBetween: 10,
            },

            560: {
                slidesPerGroup: 3,
                slidesPerView: 3.2,
                spaceBetween: 10,
            },

            320: {
                slidesPerGroup: 2,
                slidesPerView: 2.2,
                spaceBetween: 10,
            },
        },
    });
}