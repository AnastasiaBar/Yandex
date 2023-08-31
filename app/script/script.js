$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        $(".container__gallery").not('.slick-initialized').slick({
            infinite: false,
            dots: false,
            speed: 100,
            slidesToShow: 1,
            nextArrow: document.querySelector('#arrow-next'),
            prevArrow: document.querySelector('#arrow-prev'),
        });
    } else {
        $('.container__gallery').filter('.slick-initialized').slick('unslick');
    }
});

