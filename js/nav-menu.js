$('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.menu').toggleClass('content_active');
});

$(window).scroll(function () {
    let image = document.getElementById('imagine').getAttribute('src');
    if(image==='img/bmw.png') {
        return;
    }
    if ($(document).scrollTop() > 70) {
        $(".menu-btn").show();
        $(".menu-btn2").hide();
    } else {
        $(".menu-btn2").show();
        $(".menu-btn").hide();
    }
});

$(document).ready(function () {
    $(".menu-btn").hide();
});

let i = 0;
let array = ['img/bm.png', 'img/bmw.png'];

function changeNav() {
    if (i !== array.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.getElementById('imagine').src = array[i];
}


$(window).scroll(function (){
    $('.mov-right').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+350) {
            $(this).addClass('fadeInRight');
        }
    });
});


$(window).scroll(function (){
    $('.mov-left').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+350) {
            $(this).addClass('fadeInLeft');
        }
    });
});


$(window).scroll(function (){
    $('.mov-up').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+350) {
            $(this).addClass('fadeInUp  ');
        }
    });
});
