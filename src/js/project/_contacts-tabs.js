if (document.querySelector('.contacts .tabs')) {
    const buttons = document.querySelectorAll('.contacts .tabs__nav-btn')
    const panel = document.querySelector('.contacts__panel')
    const wrapper = document.querySelector('.contacts__wrapper')
    const styles = wrapper.style;

    const action = () => {
        let height = panel.offsetHeight
        styles.setProperty('--contacts-panel', `${height}px`);
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                height = panel.offsetHeight
                styles.setProperty('--contacts-panel', `${height}px`);
            })
        });
    }

    window.addEventListener('resize', action)

    if (window.innerWidth < 1124) {
        action()
    }
}