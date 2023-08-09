import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

if (document.querySelector('.production-technologies__swiper')) {
    const allSwipers = document.querySelectorAll('.production-technologies__swiper')
    allSwipers.forEach(swiper => {
        const swiperRecommended = new Swiper(swiper, {
            speed: 800,
            spaceBetween: 20,
            slidesPerGroup: 1,
            slidesPerView: 1,

            navigation: {
                nextEl: swiper.querySelector('.production-technologies__button--next'),
                prevEl: swiper.querySelector('.production-technologies__button--prev'),
            },
        });
    })
}