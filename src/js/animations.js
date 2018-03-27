
import SmoothScroll from 'smooth-scroll/dist/js/smooth-scroll.min';
import ScrollReveal from 'scrollreveal/dist/scrollreveal.min.js'

var scroll = new SmoothScroll('a[href*="#"]',{
    ignore: '[data-scroll-ignore]',
    //offset: -80  // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
});

//amimations
window.sr = ScrollReveal();
sr.reveal('.play-btn',{
    duration:1000,
    delay: 200,
    origin: 'bottom',
    distance: '0px',
});
sr.reveal('.btn-primary', {
    duration:700,
    delay: 500,
    origin: 'bottom',
    distance: '0px',
    mobile: false
})

sr.reveal('.oc-title, .of-title, .oe-title, .ma-title, .ev-title, .in-title, .au-title, .te-title', {
    duration: 1000,
    origin: 'top',
    viewFactor: 0
});

sr.reveal('#row-oc-whatis, #row-oe-whatis',{
    duration: 1000,
    origin: 'right',
    distance: '2em',
    viewFactor: 0
});
sr.reveal('#row-of-whatis, #row-ma-whatis',{
    duration: 1000,
    origin: 'left',
    distance: '2em',
    viewFactor: 0
});


sr.reveal('#oc-tab, #oe-tab', {
    duration: 1000,
    origin: 'left',
    viewFactor: 0
});
sr.reveal('#of-tab, #ma-tab, #au-desc', {
    duration: 1000,
    origin: 'right',
    viewFactor: 0
});

sr.reveal('#in-desc, #calendar, #au-desc-mobile',{
    duration:1000,
    delay: 200,
    origin: 'bottom',
    distance: '0px',
});
sr.reveal('.in-cards, #carouselTestimonal', {
    duration:700,
    delay: 500,
    origin: 'bottom',
    distance: '0px',
    mobile: false
})





