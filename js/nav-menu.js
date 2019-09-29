$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.menu').toggleClass('content_active');
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 70) {
        $(".menu-btn").show();
        $(".menu-btn2").hide();
    } else {
        $(".menu-btn2").show();
        $(".menu-btn").hide();
    }
});
