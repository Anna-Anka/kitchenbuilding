export const characteristicsDescr = () => {
    if (document.querySelector('.characteristic-card__descr')) {
        const cards = document.querySelectorAll('.characteristic-card');

        cards.forEach(card => {
            const button = card.querySelector('.characteristic-card__button');
            console.log(button)
            const descr = card.querySelector('.characteristic-card__descr');

            if (button) {
                button.addEventListener('click', () => {
                    descr.classList.toggle('characteristic-card__descr--active')
                })
            }   
        })
    }
}