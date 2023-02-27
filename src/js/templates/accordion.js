export const accordionFunction = () => {
    if (document.querySelector('.menu-accordion__item')) {
        const accordions = document.querySelectorAll('.menu-accordion__item');

        accordions.forEach(el => {
            el.addEventListener('click', (e) => {
                const self = e.currentTarget;
                const control = self.querySelector('.menu-accordion__button');
                const content = self.querySelector('.menu-accordion__content');

                self.classList.toggle('open');

                // если открыт аккордеон
                if (self.classList.contains('open')) {
                    control.setAttribute('aria-expanded', true);
                    content.setAttribute('aria-hidden', false);
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    control.setAttribute('aria-expanded', false);
                    content.setAttribute('aria-hidden', true);
                    content.style.maxHeight = null;
                }
            });
        });
    };
};
