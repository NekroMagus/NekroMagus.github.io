$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.menu').toggleClass('content_active');
});