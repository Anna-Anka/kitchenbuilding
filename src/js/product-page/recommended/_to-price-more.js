export const recommendedToPriceMore = () => {
    if (document.querySelector('.to-price__more')) {
        const more = document.querySelector('.to-price__more')

        more.addEventListener('click', () => {
            more.classList.toggle('to-price__more--expanded')

            if (more.classList.contains('to-price__more--expanded')) {
                more.innerHTML = 'Скрыть'
            } else {
                more.innerHTML = 'Ещё 12'
            }
        })
    }
}