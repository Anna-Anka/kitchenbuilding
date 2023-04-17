import '../_libs'

export const recommendedProductsSwiper = () => {
    if (document.querySelector('.recommended-products__swiper')) {
        const allSwipers = document.querySelectorAll('.recommended-products__swiper')
        allSwipers.forEach(swiper => {
            const swiperRecommended = new Swiper(swiper, {
                loop: true,
                speed: 800,
                spaceBetween: 10,

                navigation: {
                    nextEl: swiper.querySelector('.recommended-products__button--next'),
                    prevEl: swiper.querySelector('.recommended-products__button--prev'),
                },

                scrollbar: {
                    el: swiper.querySelector('.recommended-products__scrollbar'),
                    draggable: true
                },

                breakpoints: {

                    768: {
                        slidesPerGroup: 3,
                        slidesPerView: 3,
                    },

                    560: {
                        slidesPerGroup: 2,
                        slidesPerView: 2.2,
                    },

                    320: {
                        slidesPerGroup: 1,
                        slidesPerView: 1.5,
                    },
                },
            });
        })
        
    }
};