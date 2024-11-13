$(document).ready(function () {
    $(".slider-charactor-owl").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nav: false,
        navText: [
            '<img src="/templates/images/btn_characteristic.png" alt="btn_characteristic">',
            '<img src="/templates/images/btn_characteristic.png" alt="btn_characteristic">',
        ],
        smartSpeed: 650,
        margin: 10,
        stagePadding: 30,
    });

    $(".slider_albums_carousel").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nav: false,
        navText: [
            '<img src="/templates/images/btn_characteristic.png" alt="btn_characteristic">',
            '<img src="/templates/images/btn_characteristic.png" alt="btn_characteristic">',
        ],
        smartSpeed: 650,
        margin: 0,
        stagePadding: 30,
    });

    $(".slider_reivew_carousel").owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nav: false,
        navText: [
            '<img src="/templates/images/btn_characteristic.png" alt="btn_characteristic">',
            '<img src="/templates/images/btn_characteristic.png" alt="btn_characteristic">',
        ],
        smartSpeed: 650,
        margin: 10,
        stagePadding: 0,
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > ($(window).height()) && $(window).scrollTop() < $('footer').offset().top) $("#category-fixed").fadeIn();
    });

    $(window).scroll(function () {
        $(".scroll-id").each(function () {
            var top = $(this).offset().top;
            if ($(window).scrollTop() > top) {
                var id = $(this).attr("data-id");
                $("#category-fixed a").removeClass("active");

                $("#category-fixed #cat" + id).addClass("active");
            }

        });
    });

    $(".btn-button-share").on("click", function () {
        $(".btn-share-icon").toggle();
    });

});

function scrollToCategory(e) {
    var top = $(e).offset().top;
    $('html,body').animate({
        scrollTop: top - 50
    }, 800);
}   