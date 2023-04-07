import '../_libs'

export const popularProductsSwiper = () => {
    if (document.querySelector('.popular-products__swiper')) {
        return new Swiper('.popular-products__swiper', {
            loop: true,
            speed: 800,

            navigation: {
                nextEl: '.popular-products__button--next',
                prevEl: '.popular-products__button--prev',
            },

            pagination: {
                el: '.popular-products__pagination',
                clickable: true,
            },

            scrollbar: {
                el: ".popular-products__scrollbar",
                draggable: true
            },

            breakpoints: {
                1100: {
                    slidesPerGroup: 3,
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                768: {
                    slidesPerGroup: 2,
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                560: {
                    slidesPerGroup: 1,
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                },

                320: {
                    slidesPerGroup: 1,
                    slidesPerView: 1.2,
                    spaceBetween: 15,
                },
            },
        });
    }
};
