import Swiper, {
    Pagination, Navigation, Scrollbar,
} from 'swiper';

Swiper.use([Pagination, Navigation, Scrollbar]);

if (document.querySelector('.other-discounts__swiper')) {
    new Swiper('.other-discounts__swiper', {
        loop: true,
        speed: 800,

        navigation: {
            nextEl: '.other-discounts__button--next',
            prevEl: '.other-discounts__button--prev',
        },

        pagination: {
            el: '.other-discounts__pagination',
            clickable: true,
        },

        scrollbar: {
            el: ".other-discounts__scrollbar",
            draggable: true
        },

        breakpoints: {
            1100: {
                slidesPerGroup: 4,
                slidesPerView: 4,
                spaceBetween: 20,
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