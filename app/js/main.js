(function($) {
'use strict';

// MENU TOP +++++
$(document).on('click', '.menu-top .burger', function(){
    $('.menu-top').toggleClass('active');
});
$(document).on('click', function(event){
	if( $(event.target).closest('.menu-top').length ) 
	return;
	$('.menu-top').removeClass('active');
	event.stopPropagation();
});
$(window).on('scroll', function(){
	if ( $(window).scrollTop() >= 100 ) {
		$('.header-top, .header-wrap').addClass('fixed_menu');
	} else {
		$('.header-top, .header-wrap').removeClass('fixed_menu');
	}
});
// MENU TOP -----


// POPUP FORM +++++
$(document).on('keydown', function(event){
    if (event.which == 27) {
        hideForm();
    }
});
$(document).on('click', function(event){
	if( $(event.target).closest('.popupform__wrap').length || $(event.target).closest('.header-button').length || $(event.target).closest('.experience__right .item').length ) return;
	hideForm();
	event.stopPropagation();
});
$(document).on('click', '.popupform__close' , hideForm);
$(document).on('click', '.header-button', showForm);

function showForm(){
	$('html').addClass('showpopup showpopup1');
	return false;
};
function hideForm(){
	$('html').removeClass('showpopup showpopup1');
};
// POPUP FORM -----


// POPUP FORM +++++
$(document).on('keydown', function(event){
    if (event.which == 27) {
        hideForm1();
    }
});
$(document).on('click', function(event){
	if( $(event.target).closest('.popupform__wrap').length || $(event.target).closest('.integration__left .link').length || $(event.target).closest('.experience__right .item').length ) return;
	hideForm1();
	event.stopPropagation();
});
$(document).on('click', '.popupform__close' , hideForm1);
$(document).on('click', '.integration__left .link', showForm1);

function showForm1(){
	$('html').addClass('showpopup showpopup2');
	return false;
};
function hideForm1(){
	$('html').removeClass('showpopup showpopup2');
};
// POPUP FORM -----


// HEADER SLIDER +++++
$(function(){
	if ($('.header-slider').length) {
		$('.header-slider .owl-carousel').owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			animateOut: 'fadeOut',
			nav: false,
			dots: true
		})
	}
});
// HEADER SLIDER -----


// EXPERIENCE +++++
let timerId = setTimeout(function tick() {
	if ( $('.experience__right .item.active + .item').length ) {
		$('.experience__right .item.active + .item').click();
	} else {
		$('.experience__right .item:first-child').click();
	}
	
	timerId = setTimeout(tick, 10000);
  }, 10000);
$(document).on('click', '.experience__right .item:not(.active)', function(){
	let $this = $(this),
		ind = $this.index(),
		$body = $this.closest('.experience').find('.bottom .item');
	
	$this.siblings().removeClass('active');
	$this.addClass('active');

	$body.removeClass('active');
	$body.eq(ind).addClass('active');
});
// EXPERIENCE -----


// FAQ +++++
$(document).on('click', '.faq__item:not(.active)', function(){
	let $this = $(this);
	
	$this.siblings().removeClass('active');
	$this.addClass('active');
});
$(document).on('click', '.faq__item.active .title', function(){
	let $this = $(this);
	
	$this.closest('.faq__item').removeClass('active');
});
$(document).on('click', '.faq__all', function(){
	var $this = $(this);

	$this.prev().find('.faq__item').addClass('show');
	$this.slideUp();
});
// FAQ -----


// COOKIE BLOCK +++++
$(document).on('click', '.cookie-block__button', function(){
	$(this).closest('.cookie-block').slideUp();

	localStorage.setItem('cookiehide', true);
});
if (localStorage.getItem('cookiehide')) {
	$('.cookie-block').hide();
}
// COOKIE BLOCK -----


// INPUT MASK +++++
$(function(){
	$('.maskme').each(function(){
		$(this).mask("+7 (999) 999-99-99");
	});
});
// INPUT MASK -----


// ANIMATIONS START +++++

$(function(){
	gsap.registerPlugin(ScrollTrigger);

	let headerTl = gsap.timeline();

	headerTl.from('.header-wrap', {scale: 1.05, duration: 1});
	headerTl.from('.header-top', {translateY: '-100%', duration: 0.2})
	headerTl.from('.header-slider', {translateX: '100%', opacity: 0});
	headerTl.from('.header-text', {translateX: '-100%', opacity: 0});
	headerTl.from('.header-note', {translateY: '100%', opacity: 0, duration: .2});
	headerTl.from('.header-button', {translateY: '100%', opacity: 0, duration: .2}, "-=.2");

	gsap.from('.advantages__title .title', {scrollTrigger: {
		trigger: '.advantages__title .title',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%'})
	gsap.from('.advantages__title .subtitle', {scrollTrigger: {
		trigger: '.advantages__title .subtitle',
		toggleActions: 'restart pause restart pause'
	}, translateX: '-100%'})
	gsap.from('.advantages__title .bg', {scrollTrigger: {
		trigger: '.advantages__title .bg',
		toggleActions: 'restart pause restart pause'
	}, translateX: '100%'})


	ScrollTrigger.batch(".advantages__item", {
		onEnter: batch => gsap.fromTo(batch, {translateX: '-400%', opacity: 0, stagger: 0.1}, {translateX: '0', opacity: 1, stagger: 0.1}),
		onEnterBack: batch => gsap.fromTo(batch, {translateX: '-400%', opacity: 0, stagger: 0.1}, {translateX: '0', opacity: 1, stagger: 0.1}),
		onLeave: batch => gsap.fromTo(batch, {translateX: '0', opacity: 1, stagger: 0.1}, {translateX: '-400%', opacity: 0, stagger: 0.1}),
		onLeaveBack: batch => gsap.fromTo(batch, {translateX: '0', opacity: 1, stagger: 0.1}, {translateX: '-400%', opacity: 0, stagger: 0.1}),
	});


	gsap.from('.double-block__bottom', {scrollTrigger: {
		trigger: '.double-block__bottom',
		toggleActions: 'restart pause restart pause'
	},  translateX: '100%', opacity: '0'})
	gsap.from('.double-block__bottom .title', {scrollTrigger: {
		trigger: '.double-block__bottom',
		toggleActions: 'restart pause restart pause'
	},  translateX: '100%', opacity: '0', delay: 0.4})
	gsap.from('.double-block__bottom .body', {scrollTrigger: {
		trigger: '.double-block__bottom',
		toggleActions: 'restart pause restart pause'
	},  translateX: '100%', opacity: '0', delay: 0.4})

	
	gsap.from('.double-block__top .maintitle', {scrollTrigger: {
		trigger: '.double-block__top .maintitle',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%', opacity: '0'})
	ScrollTrigger.batch(".double-block__top--item", {
		onEnter: batch => gsap.fromTo(batch, {translateX: '-400%', opacity: 0, stagger: 0.1}, {translateX: '0', opacity: 1, stagger: 0.1}),
		onEnterBack: batch => gsap.fromTo(batch, {translateX: '-400%', opacity: 0, stagger: 0.1}, {translateX: '0', opacity: 1, stagger: 0.1}),
		onLeave: batch => gsap.fromTo(batch, {translateX: '0', opacity: 1, stagger: 0.1}, {translateX: '-400%', opacity: 0, stagger: 0.1}),
		onLeaveBack: batch => gsap.fromTo(batch, {translateX: '0', opacity: 1, stagger: 0.1}, {translateX: '-400%', opacity: 0, stagger: 0.1}),
	});


	gsap.from('.partners__item', {scrollTrigger: {
		trigger: '.partners__inner',
		toggleActions: 'restart pause restart pause'
	},  left: '43%', top: '40%', duration: 1.2, opacity: '0'})


	gsap.from('.steps__image', {scrollTrigger: {
		trigger: '.steps__image',
		toggleActions: 'restart pause restart pause'
	},  translateX: '100%', opacity: '0'})
	gsap.from('.steps__title', {scrollTrigger: {
		trigger: '.steps__title',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%', opacity: '0'})	
	ScrollTrigger.batch(".steps__item", {
		onEnter: batch => gsap.fromTo(batch, {left: '-400%', opacity: 0, stagger: 0.2}, {left: '0', opacity: 1, stagger: 0.2}),
		onEnterBack: batch => gsap.fromTo(batch, {left: '-400%', opacity: 0, stagger: 0.2}, {left: '0', opacity: 1, stagger: 0.2}),
		onLeave: batch => gsap.fromTo(batch, {left: '0', opacity: 1, stagger: 0.2}, {left: '-400%', opacity: 0, stagger: 0.2}),
		onLeaveBack: batch => gsap.fromTo(batch, {left: '0', opacity: 1, stagger: 0.2}, {left: '-400%', opacity: 0, stagger: 0.2}),
	});


	gsap.from('.quadruple-block .top .left .title', {scrollTrigger: {
		trigger: '.quadruple-block .top .left .title',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%', opacity: '0'})
	ScrollTrigger.batch(".quadruple-block .top .left .item", {
		onEnter: batch => gsap.fromTo(batch, {left: '-400%', opacity: 0, stagger: 0.2}, {left: '0', opacity: 1, stagger: 0.2}),
		onEnterBack: batch => gsap.fromTo(batch, {left: '-400%', opacity: 0, stagger: 0.2}, {left: '0', opacity: 1, stagger: 0.2}),
		onLeave: batch => gsap.fromTo(batch, {left: '0', opacity: 1, stagger: 0.2}, {left: '-400%', opacity: 0, stagger: 0.2}),
		onLeaveBack: batch => gsap.fromTo(batch, {left: '0', opacity: 1, stagger: 0.2}, {left: '-400%', opacity: 0, stagger: 0.2}),
	});
	gsap.from('.quadruple-block .bottom .left .titles', {scrollTrigger: {
		trigger: '.quadruple-block .bottom .left .titles',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%', opacity: '0'})
	gsap.from('.quadruple-block .bottom .left .note', {scrollTrigger: {
		trigger: '.quadruple-block .bottom .left .note',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%', opacity: '0'})
	ScrollTrigger.batch(".quadruple-block .bottom .left .item", {
		onEnter: batch => gsap.fromTo(batch, {left: '-400%', opacity: 0, stagger: 0.2}, {left: '0', opacity: 1, stagger: 0.2}),
		onEnterBack: batch => gsap.fromTo(batch, {left: '-400%', opacity: 0, stagger: 0.2}, {left: '0', opacity: 1, stagger: 0.2}),
		onLeave: batch => gsap.fromTo(batch, {left: '0', opacity: 1, stagger: 0.2}, {left: '-400%', opacity: 0, stagger: 0.2}),
		onLeaveBack: batch => gsap.fromTo(batch, {left: '0', opacity: 1, stagger: 0.2}, {left: '-400%', opacity: 0, stagger: 0.2}),
	});	


	gsap.from('.integration__title', {scrollTrigger: {
		trigger: '.integration__title',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%', opacity: '0'})
	gsap.from('.integration__left', {scrollTrigger: {
		trigger: '.integration__left',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%', translateY: '100%', opacity: '0'})
	gsap.from('.integration__right', {scrollTrigger: {
		trigger: '.integration__right',
		toggleActions: 'restart pause restart pause'
	},  translateX: '100%', translateY: '100%', opacity: '0'})
	ScrollTrigger.batch(".integration__left .item", {
		onEnter: batch => gsap.fromTo(batch, {translateX: '-400%', opacity: 0, stagger: 0.2}, {translateX: '0', opacity: 1, stagger: 0.2}),
		onEnterBack: batch => gsap.fromTo(batch, {translateX: '-400%', opacity: 0, stagger: 0.2}, {translateX: '0', opacity: 1, stagger: 0.2}),
		onLeave: batch => gsap.fromTo(batch, {translateX: '0', opacity: 1, stagger: 0.2}, {translateX: '-400%', opacity: 0, stagger: 0.2}),
		onLeaveBack: batch => gsap.fromTo(batch, {translateX: '0', opacity: 1, stagger: 0.2}, {translateX: '-400%', opacity: 0, stagger: 0.2}),
	});	


	gsap.from('.experience__left', {scrollTrigger: {
		trigger: '.experience__left',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%', translateY: '100%', opacity: '0'})
	gsap.from('.experience__right', {scrollTrigger: {
		trigger: '.experience__right',
		toggleActions: 'restart pause restart pause'
	},  translateX: '100%', translateY: '100%', opacity: '0'})
	ScrollTrigger.batch(".experience__right .top .item", {
		onEnter: batch => gsap.fromTo(batch, {translateX: '400%', opacity: 0, stagger: 0.2}, {translateX: '0', opacity: 1, stagger: 0.2}),
		onEnterBack: batch => gsap.fromTo(batch, {translateX: '400%', opacity: 0, stagger: 0.2}, {translateX: '0', opacity: 1, stagger: 0.2}),
		onLeave: batch => gsap.fromTo(batch, {translateX: '0', opacity: 1, stagger: 0.2}, {translateX: '400%', opacity: 0, stagger: 0.2}),
		onLeaveBack: batch => gsap.fromTo(batch, {translateX: '0', opacity: 1, stagger: 0.2}, {translateX: '400%', opacity: 0, stagger: 0.2}),
	});	


	gsap.from('.reviews', {scrollTrigger: {
		trigger: '.reviews',
		toggleActions: 'restart pause restart pause'
	},  translateY: '100%', opacity: '0'})
	gsap.from('.reviews__inner', {scrollTrigger: {
		trigger: '.reviews__inner',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-100%', opacity: '0'})


	gsap.from('.faq__left', {scrollTrigger: {
		trigger: '.faq__left',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-200%', opacity: '0'})
	gsap.from('.faq__title', {scrollTrigger: {
		trigger: '.faq__title',
		toggleActions: 'restart pause restart pause'
	},  translateX: '200%', opacity: '0'})
	gsap.from('.faq .list', {scrollTrigger: {
		trigger: '.faq .list',
		toggleActions: 'restart pause restart pause'
	},  translateX: '200%', opacity: '0', delay: 0.5})


	gsap.from('.form-block__title', {scrollTrigger: {
		trigger: '.form-block__title',
		toggleActions: 'restart pause restart pause'
	},  translateY: '100%', opacity: '0'})
	gsap.from('.form-block__block', {scrollTrigger: {
		trigger: '.form-block__block',
		toggleActions: 'restart pause restart pause'
	},  translateX: '200%', opacity: '0'})


	gsap.from('.cookie-block', {scrollTrigger: {
		trigger: '.cookie-block',
		toggleActions: 'restart pause restart pause'
	},  translateY: '-200%', translateX: '-200%', opacity: '0'})


	gsap.from('.footer__logo', {scrollTrigger: {
		trigger: '.footer__logo',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-200%', opacity: '0'})
	gsap.from('.footer__menu', {scrollTrigger: {
		trigger: '.footer__menu',
		toggleActions: 'restart pause restart pause'
	},  translateX: '-200%', opacity: '0', delay: 1})
	gsap.from('.footer__text', {scrollTrigger: {
		trigger: '.footer__text',
		toggleActions: 'restart pause restart pause'
	},  translateX: '200%', opacity: '0'})
	gsap.from('.footer__contacts', {scrollTrigger: {
		trigger: '.footer__contacts',
		toggleActions: 'restart pause restart pause'
	},  translateX: '200%', opacity: '0', delay: 1})
});
// ANIMATIONS END +++++


})(jQuery)