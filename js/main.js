(function ($) {
    "use strict";
 
 
 // Sticky Navbar
 $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});

// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});



// Smooth Scrolling
$('.nav-link, .navbar-brand, .scroll-to-top').click(function () {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            var top_space = 0;

            if ($('.navbar').length) {
                top_space = $('.navbar').outerHeight();

                if (!$('.navbar').hasClass('navbar-fixed-top')) {
                    top_space = top_space + 20;
                }
            }

            $('html, body').animate(
                {
                    scrollTop: target.offset().top - top_space,
                },
                1000,
                'easeInOutExpo'
            );

            if ($(this).parents('.nav-menu').length) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
            }

            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                $('#mobile-body-overly').fadeOut();
            }
            return false;
        }
    }
});
})(jQuery);