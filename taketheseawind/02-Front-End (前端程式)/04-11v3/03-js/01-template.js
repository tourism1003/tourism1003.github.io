// start:按 LOGO 的時候，會回到最上面
var logo_onScroll = document.querySelector('.logo')
window.onscroll = function(){

    var nowScrollTop_safari = document.body.scrollTop
    var nowScrollTop_google = document.documentElement.scrollTop
    
    if(nowScrollTop_safari > 200  || nowScrollTop_google >200){
        logo_onScroll.classList.add('active')
    }else{
        logo_onScroll.classList.remove('active')
    }
}

logo_onScroll.onclick = function(){
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}
// end:按 LOGO 的時候，會回到最上面

// start:按 gototop 的時候，會回到最上面
var goTotop = document.querySelector('.scrolltop')
window.onscroll = function(){

    var nowScrollTop_safari = document.body.scrollTop
    var nowScrollTop_google = document.documentElement.scrollTop
    
    if(nowScrollTop_safari > 200  || nowScrollTop_google >200){
        goTotop.classList.add('active')
    }else{
        goTotop.classList.remove('active')
    }
}


goTotop.onclick = function(){
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}
// end:按 gototop 的時候，會回到最上面

// start:按 選單按鈕 的時候，會變更顏色
var buTtons = document.querySelectorAll(".button")

        for (let index = 0; index < buTtons.length; index++) {
            const buTtonss = buTtons[index];

            buTtonss.onclick = function () {
                clearAllActive()
                buTtonss.classList.add('active')
            }
        }

        function clearAllActive() {
            for (let index = 0; index < buTtons.length; index++) {
                const buTtonss = buTtons[index]

                buTtonss.classList.remove('active')
            }
        }
// end:按 選單按鈕 的時候，會變更顏色