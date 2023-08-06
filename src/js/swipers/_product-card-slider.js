import Swiper, {
    Pagination, Navigation, Thumbs,
} from 'swiper';

Swiper.use([Pagination, Navigation, Thumbs]);

if (document.querySelector('.product-card__main')) {
    const productCards = document.querySelectorAll('.product-card')

    productCards.forEach(card => {
        const sliderMain = card.querySelector('.slider-main');
        const sliderNav = card.querySelector('.slider-nav');

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
                nextEl: card.querySelector('.product-card__button--next'),
                prevEl: card.querySelector('.product-card__button--prev')
            },

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        })

        const changeSlide = () => {
            const slideActive = swiperMain.realIndex + 1

            const priceAll = card.querySelectorAll('[data-price]')

            priceAll.forEach(price => {
                const valuePrice = Number(price.getAttribute('data-price'))
                if (valuePrice === slideActive) {
                    price.classList.add('product-card__price--active')
                } else {
                    price.classList.remove('product-card__price--active')
                }
            })
        }

        swiperMain.init(changeSlide())
        swiperMain.on('slideChange', changeSlide)
    })
};
