import Swiper, {
    Pagination, Navigation, Scrollbar,
} from 'swiper';

Swiper.use([Pagination, Navigation, Scrollbar]);

if (document.querySelector('.articles-section__swiper')) {
    new Swiper('.articles-section__swiper', {
        loop: true,
        speed: 800,

        navigation: {
            nextEl: '.articles-section__button--next',
            prevEl: '.articles-section__button--prev',
        },

        pagination: {
            el: '.articles-section__pagination',
            clickable: true,
        },

        scrollbar: {
            el: ".articles-section__scrollbar",
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
