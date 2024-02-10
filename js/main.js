$(function(){
    $('.fairy-tail__slider, .our-trip__slider').slick({
        fade: true,
        autoplay: 1500,
        prevArrow:
            '<button class="slick-prev slick-btn" type="button"><img src="images/fairy-tail/arrow-prev.svg"></button>',
        nextArrow:
            '<button class="slick-next slick-btn" type="button"><img src="images/fairy-tail/arrow-next.svg"></button>',

            responsive: [
                {
                    breakpoint: 722,
                    settings: {
                        arrows: false
                    }
                }
            ]
    });
});