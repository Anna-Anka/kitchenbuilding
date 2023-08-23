import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

if (document.querySelector('.review-card__swiper')) {
    const allSwipers = document.querySelectorAll('.review-card__swiper')
    allSwipers.forEach(swiper => {
        const swiperReview = new Swiper(swiper, {
            speed: 800,
            spaceBetween: 10,
            slidesPerGroup: 3,
            slidesPerView: 3,

            navigation: {
                nextEl: swiper.querySelector('.review-card__button--next'),
                prevEl: swiper.querySelector('.review-card__button--prev'),
            },

            breakpoints: {
                992: {
                    slidesPerGroup: 3,
                    slidesPerView: 3,
                },

                768: {
                    slidesPerGroup: 4,
                    slidesPerView: 4.2,
                },

                480: {
                    slidesPerGroup: 3,
                    slidesPerView: 3.2,
                },

                320: {
                    slidesPerGroup: 2,
                    slidesPerView: 2.2,
                },
            },
        });
    })
}