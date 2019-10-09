$('.menu-btn').on('click', function () {
    $('.menu').toggleClass('menu_active');
    $('.menu-btn').toggleClass('menu-btn-white');
});

function hideNav() {
    $('.menu-btn').toggleClass('menu-btn-white');
    $('.menu').toggleClass('menu_active');
}

$(window).scroll(function () {
    if ($(document).scrollTop() > 70) {
        $(".menu-btn").show();
        $('.button-up').show();
    } else {
        $(".menu-btn").hide();
        $('.button-up').hide();
    }
});

$(document).ready(function () {
    if ($(document).scrollTop() < 70) {
        $(".menu-btn").hide();
        $('.button-up').hide();
    }
});

$(window).scroll(function () {
    $('.mov-right').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass('fadeInRight');
        }
    });
});


$(window).scroll(function () {
    $('.mov-left').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass('fadeInLeft');
        }
    });
});

$(window).scroll(function () {
    $('.mov-up').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass('fadeInUp');
        }
    });
});

function buttonHover() {
    $('.header-button-left-back').addClass('hover-button');
}

function buttonHoverOut() {
    $('.header-button-left-back').removeClass('hover-button');
}