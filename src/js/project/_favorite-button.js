export const favoriteButton = () => {
    if (document.querySelector('.product-card__favorite')) {
        const buttons = document.querySelectorAll('.product-card__favorite')

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('product-card__favorite--active')
            })
        })
    }
}