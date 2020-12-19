$(document).ready(function() {


    $('.main-slide').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav'
    })
    $('.slider-nav').slick({

        slidesToShow: 9,
        asNavFor: '.main-slide',

        focusOnSelect: true

    });

})