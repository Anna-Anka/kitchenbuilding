import './../_libs'

export const productCardSlider = () => {
    if (document.querySelector('.product-card__main')) {
        const sliderMain = document.querySelector('.slider-main');
        const sliderNav = document.querySelector('.slider-nav');

        const swiperSmall = new Swiper(sliderNav, {
            slidesPerView: 9,
            spaceBetween: 10,
            loopedSlides: 9,
            freeMode: true,
        });

        const swiperMain = new Swiper(sliderMain, {
            spaceBetween: 10,
            loopedSlides: 9,
            speed: 500,

            thumbs: {
                swiper: swiperSmall,
            },

            navigation: {
                nextEl: '.product-card__button--next',
                prevEl: '.product-card__button--prev',
            },
        });
    };
};
