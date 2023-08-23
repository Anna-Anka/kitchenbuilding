if (document.querySelector('.review-card')) {
    const cardsAll = document.querySelectorAll('.review-card');

    cardsAll.forEach(card => {
        const text = card.querySelector('.review-card__text')
        const button = card.querySelector('.review-card__more')
        let textContent = text.innerHTML
        let textContentCopy = textContent
        const textLength = text.innerHTML.length

        if (textLength > 315) {

            button.classList.add('review-card__more--show');
            const newText = textContent.slice(0, 251)
            text.innerHTML = newText + '...'

            button.addEventListener('click', () => {
                button.classList.remove('review-card__more--show')
                text.innerHTML = textContentCopy
            })
        }
    })

}