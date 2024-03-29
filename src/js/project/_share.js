if (document.querySelector('.share')) {
    const copyAll = document.querySelectorAll('.share__button');
    copyAll.forEach(copy => {
        copy.addEventListener('click', (event) => {
            const copytext = document.createElement('input')
            copytext.value = window.location.href
            document.body.appendChild(copytext)
            copytext.select()
            document.execCommand('copy')
            document.body.removeChild(copytext)

            copy.parentNode.classList.add('share--active')
        });
    });
}