import { disableScroll } from '../templates/disable-scroll';
import { enableScroll } from '../templates/enable-scroll';

if (document.querySelector('.header-bottom__button')) {
    const menuButton = document.querySelector('.header-bottom__button');
    const menu = document.querySelector('.drop-menu');
    const overlay = document.querySelector('.overlay');
    const headerTop = document.querySelector('.header-top');
    const headerBottom = document.querySelector('.header-bottom');

    const calcHeightHeader = () => {
        let height = headerTop.clientHeight + headerBottom.clientHeight
        menu.style.paddingTop = height + 'px'
    }

    const setDefault = () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Открыть меню')
        enableScroll();
    }

    function clickWindow(event) {
        if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
            menuButton.classList.remove('header-bottom__button--active');
            menu.classList.remove('drop-menu--active');
            overlay.classList.remove('overlay--active');
            setDefault();
            window.removeEventListener('click', clickWindow)
        }
    }

    calcHeightHeader()

    window.addEventListener('resize', calcHeightHeader)

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('header-bottom__button--active');
        menu.classList.toggle('drop-menu--active');
        overlay.classList.toggle('overlay--active');
        window.removeEventListener('click', clickWindow)

        if (menuButton.classList.contains('header-bottom__button--active')) {
            menuButton.setAttribute('aria-expanded', 'true');
            menuButton.setAttribute('aria-label', 'Закрыть меню')
            disableScroll();
            window.addEventListener('click', clickWindow)

        } else {
            setDefault();
        }
    })
}