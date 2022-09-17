// .cover
$(document).ready(function(){
    $(".cover").slick({
        // --- basic information
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // --- ARROWS & DOTS
        arrows: true,
        dots: true,
            // --- styling the arrows
            prevArrow: `<button type='button' class='slick-prev slick-arrow'></button>`,
            nextArrow: `<button type='button' class='slick-next slick-arrow'></button>`,
        // --- AUTOPLAY
        autoplay: false,
        autoplaySpeed: 7000,
        // --- ANIMATIONS
        fade: true,
        speed: 800,
        draggable: false,
        // RESPONSIVE

    });
});

// .trending
$(document).ready(function() {
    $('.trending__slides').slick({
        // --- basic information
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // --- ARROWS & DOTS
        arrows: true,
        dots: true,
            // --- styling the arrows
            prevArrow: `<button type='button' class='slick-prev slick-arrow'></button>`,
            nextArrow: `<button type='button' class='slick-next slick-arrow'></button>`,
        // --- AUTOPLAY
        autoplay: false,
        // --- ANIMATIONS
        draggable: true,
        // RESPONSIVE
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]

    });
});

// .bfa
$(document).ready(function() {
    $('.bfa .bfa__slides-2').slick({
        // --- basic information
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // --- more
        adaptiveHeight: true,
        // --- ARROWS & DOTS
        dots: false,
        arrows: true,
            // --- styling the arrows
            prevArrow: `<button type='button' class='slick-prev slick-arrow'></button>`,
            nextArrow: `<button type='button' class='slick-next slick-arrow'></button>`,
        // --- AUTOPLAY
        autoplay: false,
        // --- ANIMATIONS
        draggable: true,
        // RESPONSIVE
    })
})

// INS
$(document).ready(function() {
    $('.ins .ins__slider').slick({
        // --- basic information
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // --- ARROWS & DOTS
        arrows: true,
        dots: false,
            // --- styling the arrows
            prevArrow: `<button type='button' class='slick-prev slick-arrow'></button>`,
            nextArrow: `<button type='button' class='slick-next slick-arrow'></button>`,
        // --- AUTOPLAY
        autoplay: false,
        // --- ANIMATIONS
        draggable: true,
        // RESPONSIVE
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  adaptiveHeight: true,
                }
            }
        ]
    });
});
