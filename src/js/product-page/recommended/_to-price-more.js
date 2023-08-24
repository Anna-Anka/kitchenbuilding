if (document.querySelector('.to-price__more')) {
    const button = document.querySelector('.to-price__show')
    const more = document.querySelector('.to-price__more')

    button.addEventListener('click', () => {
        more.classList.toggle('to-price__more--expanded')

        if (more.classList.contains('to-price__more--expanded')) {
            more.innerHTML = 'Скрыть'
        } else {
            more.innerHTML = 'Ещё 12'
        }
    })
}