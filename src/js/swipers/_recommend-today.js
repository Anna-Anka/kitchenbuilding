import '../_libs'

export const recommendTodaySwiper = () => {
    if (document.querySelector('.recommend-today__swiper')) {
        return new Swiper('.recommend-today__swiper', {
            loop: true,
            speed: 800,

            navigation: {
                nextEl: '.recommend-today__button--next',
                prevEl: '.recommend-today__button--prev',
            },

            pagination: {
                el: '.recommend-today__pagination',
                clickable: true,
            },

            scrollbar: {
                el: ".recommend-today__scrollbar",
                draggable: true
            },

            breakpoints: {
                1100: {
                    slidesPerGroup: 4,
                    slidesPerView: 4,
                    spaceBetween: 20,
                },

                768: {
                    slidesPerGroup: 3,
                    slidesPerView: 3,
                    spaceBetween: 10,
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
};
