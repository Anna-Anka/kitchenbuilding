/* eslint-disable import/extensions */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-relative-packages */

import { accordionFunction } from "./templates/accordion";
accordionFunction();

import { burger } from './templates/burger';
burger();

import GraphTabs from 'graph-tabs';
if (document.querySelector('[data-tabs="recommended-products"]')) {
    const tabs = new GraphTabs('recommended-products');
}

if (document.querySelector('[data-tabs="contacts"]')) {
    const tabs = new GraphTabs('contacts');
}

if (document.querySelector('[data-tabs="production-technologies"]')) {
    const tabs = new GraphTabs('production-technologies');
}

import Inputmask from "inputmask";
if (document.querySelector('input[type="tel"]')) {
    let inputs = document.querySelectorAll('input[type="tel"]')
    let im = new Inputmask('+7 (999) 999-99-99')
    im.mask(inputs)
}

import { smoothScroll } from "./templates/smooth-scroll";
smoothScroll();

import GraphModal from 'graph-modal';
const modal = new GraphModal('modal');

import mixitup from 'mixitup';

if (document.querySelector('.articles-block')) {
    let mixer = mixitup('.articles-block', {
        load: {
            filter: '.category-furniture'
        }
    });
}
