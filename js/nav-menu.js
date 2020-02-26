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
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
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

window.onload = function time() {
    let nowDate = new Date();
    let hakatonDate = new Date(2020, 4, 4, 0, 0, 0);
    let result = (hakatonDate - nowDate) + 1000;
    let elm = document.getElementById('days');
    const day_name = document.getElementById('day-name');
    elm.className = "bigNumber";
    day_name.className = "big";
    if (result < 0) {
        elm.innerHTML = '0 дней осталось';
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

$(document).ready(function () {
    let hour = new Date().getHours();
    if (hour >= 19 || hour <= 7) {
        $('p').css('color', '#E4E4E4');
        $('body').css('background-color', 'black');
        $('span').css('color','#E4E4E4');
        $('#hackers').attr('src','./img/new/LogoHackersWhite.svg');
        $('#TK_point').attr('src', './img/new/TK_logo.png');
        $('#event2035').attr('src', './img/new/events2035-dark.png');
    }
});