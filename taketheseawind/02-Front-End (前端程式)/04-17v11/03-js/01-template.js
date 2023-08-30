var logo_onScroll = document.querySelector('.logo')
var goTotop = document.querySelector('.scrolltop')
var btn = document.querySelectorAll('.button')

window.onscroll = function () {

    // start:按 LOGO 跟 gototop的時候，會回到最上面+清除選單按鈕
    var nowScrollTop_safari = document.body.scrollTop
    var nowScrollTop_google = document.documentElement.scrollTop

    if (nowScrollTop_safari > 200 || nowScrollTop_google > 200) {
        logo_onScroll.classList.add('active')
        goTotop.classList.add('active')
    } else {
        logo_onScroll.classList.remove('active')
        goTotop.classList.remove('active')
    }
}

logo_onScroll.onclick = function () {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    for (let index = 0; index < btn.length; index++) {
        const btns = btn[index];
        btns.classList.remove('active')
    }
}

goTotop.onclick = function () {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    for (let index = 0; index < btn.length; index++) {
        const btns = btn[index];
        btns.classList.remove('active')
    }
}
// end:按 LOGO 跟 gototop 的時候，會回到最上面+清除選單按鈕
// start:按 選單按鈕 的時候，會變更顏色
for (let index = 0; index < btn.length; index++) {
    const btns = btn[index];

    btns.onclick = function () {
        clearAllActive()
        btns.classList.add('active')
    }
}

function clearAllActive() {
    for (let index = 0; index < btn.length; index++) {
        const btns = btn[index]
        btns.classList.remove('active')
    }
    // end:按 選單按鈕 的時候，會變更顏色
}


window.onload = function () {

    $(window).scroll(function () {
        var currentscrollTop = $(window).scrollTop();
        var remove_active = function () {
            $('#menu').find('li .button.active').toggleClass('active');
        }
        if (currentscrollTop <= $("#swiper").offset().top && currentscrollTop < $("#section-1").offset().top) {
            remove_active()
            console.log("#swiper");
        } else if (currentscrollTop <= $("#section-1").offset().top && currentscrollTop < $("#section-2").offset().top) {
            remove_active()
            $('#menu').find('li').eq(0).find($('.button')).toggleClass('active');
            console.log("#section-1");
        } else if (($("#section-2").offset().top - 10) <= currentscrollTop && currentscrollTop < $("#section-3").offset().top) {
            remove_active()
            $('#menu').find('li').eq(1).find($('.button')).toggleClass('active');
            console.log("#section-2");
        } else if (($("#section-3").offset().top - 10) <= currentscrollTop && currentscrollTop < $("#section-4").offset().top) {
            remove_active()
            $('#menu').find('li').eq(2).find($('.button')).toggleClass('active');
            console.log("#section-3");
        } else if (($("#section-4").offset().top - 10) <= currentscrollTop && currentscrollTop < $("#footer").offset().top) {
            remove_active()
            $('#menu').find('li').eq(3).find($('.button')).toggleClass('active');
            console.log("#section-4");
        } else if (($("#footer").offset().top - 20) <= currentscrollTop) {
            remove_active()
            $('#menu').find('li').eq(4).find($('.button')).toggleClass('active');
            console.log("#footer");
        }
    });
}
