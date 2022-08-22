// Menu open
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


// Mask for mobile number
$(function(){
    $('input[name=phone]').mask("+38 (999) 999-99-99");
});

// Smooth croll for pageUp
$(window).scroll(function() {
if ($(this).scrollTop() > 1000) {
    $('.page_up').fadeIn();
} else {
    $('.page_up').fadeOut();
}
});


// Script Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})