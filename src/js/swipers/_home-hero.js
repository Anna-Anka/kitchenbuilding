import '../_libs'

export const homeHeroSwiper = () => {
    if (document.querySelector('.home-hero__swiper')) {
        return new Swiper('.home-hero__swiper', {
            loop: true,
            speed: 800,
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 15,

            navigation: {
                nextEl: '.home-hero__button--next',
                prevEl: '.home-hero__button--prev',
            },

            pagination: {
                el: '.home-hero__pagination',
                clickable: true,
            },
        });
    }
};
