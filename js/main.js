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
		$('.header-top').addClass('fixed_menu');
	} else {
		$('.header-top').removeClass('fixed_menu');
	}
});
// MENU TOP -----


// POPUP FORM +++++
$(document).on('keydown', function(event){
    if (event.which == 27) {
        hideForm();
		console.log('keydown')
    }
});
$(document).on('click', function(event){
	if( $(event.target).closest('.popupform__wrap').length || $(event.target).closest('.header-button').length || $(event.target).closest('.integration__left .link').length ) return;
	hideForm();
	event.stopPropagation();
});
$(document).on('click', '.popupform__close' , hideForm);
$(document).on('click', '.header-button, .integration__left .link', showForm);

function showForm(){
	$('html').addClass('showpopup');
	return false;
};
function hideForm(){
	$('html').removeClass('showpopup');
};
// POPUP FORM -----


// HEADER SLIDER +++++
$(function(){
	if ($('.header-slider').length) {
		$('.header-slider .owl-carousel').owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
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

})(jQuery)