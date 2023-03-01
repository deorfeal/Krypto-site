import { createApp } from 'vue'

import App from './App.vue'
let ourApp = createApp(App)
ourApp.mount('#app')

import AppPayment from './App-payment.vue'
let paymentApp = createApp(AppPayment)
paymentApp.mount('#app-payment');

import AppPartners from './App-partners.vue'
let partnersApp = createApp(AppPartners)
partnersApp.mount('#partners-app')

import AppAbout from './App-about.vue'
let aboutApp = createApp(AppAbout)
aboutApp.mount('#about-app')

import AppRules from './App-rules.vue'
let rulesApp = createApp(AppRules)
rulesApp.mount('#rules-app')

import AppPolicy from './App-policy.vue'
let policyApp = createApp(AppPolicy)
policyApp.mount('#policy-app')


jQuery(document).ready(function () {
    (function () {
        // your page initialization code here
        // the DOM will be available here
        AOS.init({
            duration: 750,
            offset: 0, // offset (in px) from the original trigger point
            once: true, // whether animation should happen only once - while scrolling down
            anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
        });
    })();
});

new Swiper('.recalls-swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 50,
    navigation: {
        prevEl: '.recalls-swiper-button-prev',
        nextEl: '.recalls-swiper-button-next',
    },
    breakpoints: {
        301: {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 50,
        },
        651: {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 50,
        },
        951: {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 50,
        },
    }
});

$('a[href*="#header"]').on('click', function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 200);
    return false;
});

$('a[href*="#recalls"]').on('click', function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 200);
    return false;
});

$('.header__btn').on('click', function (event) {
    $('.header').toggleClass('header--active');
    $('.body').toggleClass('body--active');
    // $(this).toggleClass('header-top-lang--active');
});

$('.navigation__list-link--active').on('click', function (event) {
    let ourBody = document.querySelector('.body')
    if( ourBody.classList.contains('body--active') ) {
        $(ourBody).removeClass('body--active')
        $('.header').removeClass('header--active')
    }
});