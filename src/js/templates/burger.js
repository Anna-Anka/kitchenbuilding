import { disableScroll } from '../templates/disable-scroll';
import { enableScroll } from '../templates/enable-scroll';

const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('[data-menu]');
const menuLinks = document?.querySelectorAll('[data-menu-link]');
const overlay = document.querySelector('.overlay');

const setDefault = () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'открыть меню');
    overlay.removeEventListener('click', clickOverlay);
    enableScroll();
}

const clickOverlay = () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('burger-menu--active');
    overlay.classList.remove('overlay--active');
    setDefault();
}

const checkClass = () => {
    if (burger?.classList.contains('burger--active')) {
        burger?.setAttribute('aria-expanded', 'true');
        burger?.setAttribute('aria-label', 'закрыть меню');
        disableScroll();
        overlay.addEventListener('click', clickOverlay);

    } else {
        setDefault();
    }
}

burger?.addEventListener('click', () => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('burger-menu--active');
    overlay.classList.toggle('overlay--active');
    checkClass();

    const checkWidthBurger = () => {
        if (window.innerWidth > 993) {
            if (burger?.classList.contains('burger--active')) {
                clickOverlay();
            }
            window.removeEventListener('resize', checkWidthBurger)
        }
    }

    window.addEventListener('resize', checkWidthBurger)
});

menuLinks?.forEach(el => {
    el.addEventListener('click', () => {
        burger?.classList.remove('burger--active');
        menu.classList.remove('burger-menu--active');
        overlay.classList.remove('overlay--active');
        enableScroll();
    });
});

