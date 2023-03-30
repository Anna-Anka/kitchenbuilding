export const productKit = () => {
    if (document.querySelector('.product-kit')) {
        const cards = document.querySelectorAll('.product-card');

        cards.forEach(card => {
            const button = card.querySelector('.product-card__question');
            const kit = card.querySelector('.product-kit');

            button.addEventListener('click', () => {
                kit.classList.toggle('product-kit--active')
            })

            window.addEventListener('click', (e) => {
                if (!button.contains(e.target) && !kit.contains(e.target)) {
                    kit.classList.remove('product-kit--active')
                }
            })
        })
    }
}
