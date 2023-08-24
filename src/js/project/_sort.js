if (document.querySelector('.sort__item--up')) {
    const sortUp = document.querySelector('.sort__item--up');
    const sortDown = document.querySelector('.sort__item--down');
    const sortNormal = document.querySelector('.sort__item--normal');

    const radioUp = sortUp.querySelector('.sort__hidden')
    const radioDown = sortDown.querySelector('.sort__hidden')
    const radioNormal = sortNormal.querySelector('.sort__hidden');

    const showUp = () => {
        sortUp.classList.remove('sort__item--hidden')
        sortDown.classList.add('sort__item--hidden')
        radioUp.checked = true
        radioDown.checked = false
    }

    const showDown = () => {
        sortUp.classList.add('sort__item--hidden')
        sortDown.classList.remove('sort__item--hidden')
        radioUp.checked = false
        radioDown.checked = true
    }

    radioUp.addEventListener('click', () => {
        if (radioUp.checked) {
            radioUp.addEventListener('click', () => {
                showDown()
            })
        }
    })

    radioDown.addEventListener('click', () => {
        if (radioDown.checked) {
            showUp()
        }
    })

    radioNormal.addEventListener('change', () => {
        if (radioNormal.checked) {
            radioUp.addEventListener('click', () => {
                showUp();

                radioUp.addEventListener('click', () => {
                    showDown();

                    radioDown.addEventListener('click', () => {
                        showUp();
                    })
                })
            })

            radioDown.addEventListener('click', () => {
                showDown();

                radioDown.addEventListener('click', () => {
                    showUp();

                    radioUp.addEventListener('click', () => {
                        showDown();
                    })
                })
            })
        }
    })
}