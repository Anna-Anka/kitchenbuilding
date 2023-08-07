export const accordionFunction = () => {
    if (document.querySelector('.accordion')) {
        const accordions = document.querySelectorAll('.accordion__item');

        accordions.forEach(accordion => {
            const button = accordion.querySelector('.accordion__button');
            button.addEventListener('click', (e) => {
                const self = e.currentTarget;
                const itemParrent = self.closest('.accordion__item')
                const content = itemParrent.querySelector('.accordion__content');
                itemParrent.classList.toggle('open');

                // если открыт аккордеон
                if (itemParrent.classList.contains('open')) {
                    const accordionParrent = itemParrent.closest('.accordion')
                    console.log(accordionParrent)
                    if (accordionParrent.hasAttribute('data-only')) {
                        const itemsAll = accordionParrent.querySelectorAll('.accordion__item.open')

                        itemsAll.length && itemsAll.forEach(item => {
                            if (item !== itemParrent) {
                                item.classList.remove('open')
                                const content = item.querySelector('.accordion__content')
                                const button = item.querySelector('.accordion__button')
                                content.setAttribute('aria-hidden', true);
                                content.style.maxHeight = null;
                                button.setAttribute('aria-expanded', false);
                            }
                        })
                    }

                    self.setAttribute('aria-expanded', true);
                    content.setAttribute('aria-hidden', false);
                    content.style.maxHeight = content.scrollHeight + 'px';

                } else {
                    self.setAttribute('aria-expanded', false);
                    content.setAttribute('aria-hidden', true);
                    content.style.maxHeight = null;
                }
            });
        });
    };
};
