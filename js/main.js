$(document).ready(function(){
$('.slider-place').owlCarousel({
    loop:true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i> '],
    nav:true,
    autoplay: 2000,
    pagination: false,
    // autoplayHoverPause: true,
    margin: 10,
    itemDesktop: [1199, 3],
    itemDesktopSmall: [979, 2],
    itemTablet: [768,2],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }

})

});