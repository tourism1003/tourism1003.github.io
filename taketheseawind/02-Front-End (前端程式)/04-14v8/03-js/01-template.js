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
}
// end:按 選單按鈕 的時候，會變更顏色