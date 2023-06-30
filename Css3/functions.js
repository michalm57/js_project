$(document).ready(function () {
    let nav = $('.nav');
    let navY = nav.offset().top;

    let stickyNav = function () {
        var scrollY = $(window).scrollTop();

        if (scrollY > navY) {
            nav.addClass('sticky');
        } else {
            nav.removeClass('sticky');
        }
    }

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});