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