var swiper = new Swiper('.swiper-container', {
    // 自動循環 (要注意手動循環跟自動循環的 JS 會不一樣)
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        // 選擇按鈕
        clickable: true,
        // 動態按鈕 /更換按鈕大小
        dynamicBullets: true,
    },
    // 方向
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 書店活動
var nav2btn = document.querySelectorAll('.nav-2-btn')
var nav2tab = document.querySelectorAll('.nav-2-tab')
for (let index = 0; index < nav2btn.length; index++) {
    const nav2btns = nav2btn[index];
    const nav2tabs = nav2tab[index];
    nav2btns.onclick = function(){
        clearAllactive()
        nav2btns.classList.add('active')
        nav2tabs.classList.add('active')
    }
}

function clearAllactive(){
    for (let index = 0; index < nav2btn.length; index++) {
        const nav2btns = nav2btn[index];
        const nav2tabs = nav2tab[index];
        nav2btns.classList.remove('active')
        nav2tabs.classList.remove('active')
    }
}