import Inputmask from "inputmask";
if (document.querySelector('input[type="tel"]')) {
    let inputs = document.querySelectorAll('input[type="tel"]')
    let im = new Inputmask('+7 (999) 999-99-99')
    im.mask(inputs)
}
