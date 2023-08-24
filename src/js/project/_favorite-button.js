if (document.querySelector('.favorite-button')) {
    const buttons = document.querySelectorAll('.favorite-button')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('favorite-button--active')
        })
    })
}