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

function buttonHoverRight() {
    $('.header-button-right-back').addClass('hover-button');
}

function buttonHoverOutRight() {
    $('.header-button-right-back').removeClass('hover-button');
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});

window.onload = function time() {
    let nowDate = new Date();
    let hakatonDate = new Date(2020, 4, 4, 0, 0, 0);
    let result = (hakatonDate - nowDate) + 1000;
    let elm = document.getElementById('days');
    const day_name = document.getElementById('day-name');
    elm.className = "bigNumber";
    if (result < 0) {
        elm.innerHTML ='0 дней осталось';
        return;
    }
    let nameDay = [' дня осталось', ' день остался', ' дней осталось'];
    let days = Math.floor(result / 1000 / 60 / 60 / 24);
    let resultDays = days % 100;
    if (resultDays >= 5 && resultDays <= 20) {
        elm.innerHTML = "" + days;
        day_name.innerHTML = nameDay[2];
    } else {
        resultDays = days % 10;
        if (resultDays === 1) {
            elm.innerHTML = "" + days;
            day_name.innerHTML = nameDay[1];
        } else if (resultDays >= 2 && resultDays <= 4) {
            elm.innerHTML = "" + days;
            day_name.innerHTML = nameDay[0];
        } else {
            elm.innerHTML = "" + days;
            day_name.innerHTML = nameDay[2];
        }
            }

};