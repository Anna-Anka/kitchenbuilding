export const search = () => {
    if (document.querySelector('.header-top__search')) {
        const searchButton = document.querySelector('.header-top__search');
        const searchForm = document.querySelector('.search-form');
        const closeButton = document.querySelector('.search-form__close');

        searchButton.addEventListener('click', () => {
            searchForm.classList.toggle('search-form--active')
        })

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                searchForm.classList.remove('search-form--active')
            })
        }
    }
}