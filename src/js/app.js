import '../index.html';
import '../scss/main.scss';

import '../img/mirna.png'
import '../img/mirna@2x.png'
import '../img/mirna_xs.png'
import '../img/mirna_xs@2x.png'

import '../img/play_btn.png';
import '../img/play_btn@2x.png';
import '../img/play_btn@2x.png';
import '../img/play_btn_hover.png';
import '../img/play_btn_hover@2x.png';
import '../img/separator.png';

import '../img/oc_img.png';
import '../img/oc_img@2x.png';
import '../img/oc_section_book.png';
import '../img/oc_section_book@2x.png';
import '../img/oc_photo_1.jpg';
import '../img/oc_photo_1@2x.jpg';
import '../img/oc_photo_2.jpg';
import '../img/oc_photo_2@2x.jpg';
import '../img/oc_photo_3.jpg';
import '../img/oc_photo_3@2x.jpg';

import '../img/of_img.png';
import '../img/of_img@2x.png';
import '../img/oe_img.png';
import '../img/oe_img@2x.png';
import '../img/ma_img.png';
import '../img/ma_img@2x.png';

import '../img/avatar1.jpg';
import '../img/avatar1@2x.jpg';

import 'font-awesome/fonts/fontawesome-webfont.woff2';
import 'font-awesome/fonts/fontawesome-webfont.woff';
import  'font-awesome/fonts/fontawesome-webfont.ttf';
//import eot from 'font-awesome/fonts/fontawesome-webfont.eot';
//import svg from 'font-awesome/fonts/fontawesome-webfont.svg';
import 'bootstrap';

import SmoothScroll from 'smooth-scroll/dist/js/smooth-scroll.min';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.min.js'
var scroll = new SmoothScroll('a[href*="#"]',{
    ignore: '[data-scroll-ignore]',
    //offset: -80  // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
});

$('.navbar-collapse a').click(function(){
    $('.navbar-collapse').collapse('hide');
});

window.sr = ScrollReveal();

sr.reveal('.play-btn',{
    duration:1000,
    delay: 200,
    origin: 'bottom',
    distance: '0px',
});
sr.reveal('.oc-title', {
    duration: 1000,
    origin: 'top',
    viewFactor: 0
});
sr.reveal('#row-oc-whatis',{
    duration: 1000,
    origin: 'right',
    distance: '2em',
    viewFactor: 0
});
sr.reveal('#oc-tab', {
    duration: 1000,
    origin: 'left',
    viewFactor: 0
})

sr.reveal('.btn-primary', {
    duration:700,
    delay: 500,
    origin: 'bottom',
    distance: '0px',
    mobile: false
})
