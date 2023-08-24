if (document.querySelector('.recommended-products__total') && document.querySelector('.to-price')) {
    const button = document.querySelector('.recommended-products__total');
    const buttonBack = document.querySelector('.to-price__back');
    const form = document.querySelector('.to-price');
    const tabs = document.querySelector('.recommended-products__tabs');

    button.addEventListener('click', () => {
        tabs.classList.add('tabs--hidden');
        form.classList.add('to-price--visible');
        button.classList.add('recommended-products__total--hidden');
    })

    buttonBack.addEventListener('click', () => {
        tabs.classList.remove('tabs--hidden');
        form.classList.remove('to-price--visible');
        button.classList.remove('recommended-products__total--hidden');
    })
}