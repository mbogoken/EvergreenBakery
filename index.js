$(document) .ready(function(){
    $("#event-cakes .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            770:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});