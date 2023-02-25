import './../_libs'

export const topSlider = () => {
    if (document.querySelector('')) {
        return new Swiper('', {
            loop: true, 
            speed: 800,
            slidesPerGroup: 1,
            centeredSlides: true,

            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                stopOnlastSlide: false,
            },

            breakpoints: {

                1400: {
                    spaceBetween: -35,
                    slidesPerView: 1.5,
                },

                1200: {
                    spaceBetween: -25,
                    slidesPerView: 1.5,
                },

                992: {
                    spaceBetween: -35,
                    slidesPerView: 1.06,
                },

                767: {
                    spaceBetween: -30,
                },

                320: {
                    slidesPerView: 1,
                    spaceBetween: -10,
                },
            },
        });
    }
};
