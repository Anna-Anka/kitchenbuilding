if (document.querySelector('.interactive')) {
    const items = document.querySelectorAll('.interactive .accordion__item');
    
    const action = () => {
        items.forEach(item => {
            const button = item.querySelector('.accordion__button');
            const style = item.getAttribute('style');

            if (getInnerWidth() < 768) {
                button.setAttribute('style', style);
            } else {
                button.removeAttribute('style');
            }
        })
    }

    const getInnerWidth = () => window.innerWidth
    window.addEventListener('resize', action)

    if (window.innerWidth < 768) {
        action()
    }
};