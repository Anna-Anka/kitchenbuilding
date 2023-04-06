import '../_libs'

export const simpleProductsSwiper = () => {
    if (document.querySelector('.simple-products__swiper')) {
        return new Swiper('.simple-products__swiper', {
            loop: true,
            speed: 800,

            navigation: {
                nextEl: '.simple-products__button--next',
                prevEl: '.simple-products__button--prev',
            },

            pagination: {
                el: '.simple-products__pagination',
                clickable: true,
            },

            scrollbar: {
                el: ".simple-products__scrollbar",
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
