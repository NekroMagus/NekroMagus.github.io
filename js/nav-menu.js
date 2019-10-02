$('.menu-btn').on('click', function (e) {
     e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.menu').toggleClass('content_active');
});

$(window).scroll(function () {
    let image = document.getElementById('imagine').getAttribute('src');
    if (image === 'img/bmw.png') {
        return;
    }
    if ($(document).scrollTop() > 70) {
        $(".menu-btn").show();
    } else {
        $(".menu-btn").hide();
    }
});

$(document).ready(function () {
    if ($(document).scrollTop() < 70) {
        $(".menu-btn").hide();
    }
});

let array = ['img/bm.png', 'img/bmw.png'];

function changeNav() {
    let current = document.getElementById('imagine').getAttribute('src');
    if (current === 'img/bm.png') {
        document.getElementById('imagine').src = array[1];
    } else {
        document.getElementById('imagine').src = array[0];
    }
}


$(window).scroll(function () {
    $('.mov-right').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 550) {
            $(this).addClass('fadeInRight');
        }
    });
});


$(window).scroll(function () {
    $('.mov-left').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 550) {
            $(this).addClass('fadeInLeft');
        }
    });
});


$(window).scroll(function () {
    $('.mov-up').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 550) {
            $(this).addClass('fadeInUp');
        }
    });
});
