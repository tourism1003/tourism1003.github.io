var RWD_Effect = [
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/01-Bootstrap-xl-1200x1080.png',
        alt:'Bootstrap-xl.png',
        title:'Bootstrap-xl',
        h3:'Bootstrap-xl',
        span:'Extra large≥1200px',
        li:'<li>navbar-toggler:display="none"</li><li>Programming Skill="progressbar"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/02-Bootstrap-lg-992x1080.png',
        alt:'Bootstrap-lg',
        title:'Bootstrap-lg',
        h3:'Bootstrap-lg',
        span:'Large≥992px',
        li:'<li>navbar-toggler:display="block"</li><li>Programming Skill="donut"</li><li>profile-img="col-4"</li><li>donut-card="col-3"</li><li>education-img="col-4"</li><li>experience-img="col-4"</li>'  
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/03-Bootstrap-md-01-768x1080.png',
        alt:'Bootstrap-md',
        title:'Bootstrap-md',
        h3:'Bootstrap-md',
        span:'Medium≥768px',
        li:'<li>profile-img="col-12"</li><li>donut-card="col-2"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/03-Bootstrap-md-02-768x1080.png',
        alt:'Bootstrap-md',
        title:'Bootstrap-md',
        h3:'Bootstrap-md',
        span:'Medium≥768px',
        li:'<li>education-img="col-12"</li><li>experience-img="col-12"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/04-Bootstrap-sm-01-576x1080.png',
        alt:'Bootstrap-sm-01',
        title:'Bootstrap-sm',
        h3:'Bootstrap-sm',
        span:'Small≥576px',
        li:'<li>experience="order"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/04-Bootstrap-sm-02-576x1080.png',
        alt:'Bootstrap-sm-02',
        title:'Bootstrap-sm',
        h3:'Bootstrap-sm',
        span:'Small≥576px',
        li:'<li>donut-card="col-3"</li><li>education-img="col-4"</li>'
    },
    {
        img:'./mockup/03-mockup製作檔/03-圖檔/05-Bootstrap-xs-02-575x1080.png',
        alt:'Bootstrap-xs',
        title:'Bootstrap-xs',
        h3:'Bootstrap-xs',
        span:'Extra small<576px',
        li:'<li>donut-card="col-2"</li>'
    },
]

var rwd_Effect = document.querySelector('.RWD_Effect')

for (let index = 0; index < RWD_Effect.length; index++) {
    const element_RWD_Effect = RWD_Effect[index];
    
    rwd_Effect.innerHTML +=`
    <div class="swiper-slide">
        <div class="card cursor-pointer">
            <img src="${element_RWD_Effect.img}" alt="${element_RWD_Effect.alt}" class="card__img z-depth-3" title="${element_RWD_Effect.title}">
            <div class="card__body mt-3">
                <h3><mark style="padding:10px 5px;">${element_RWD_Effect.h3}</mark></h3>
                <span>${element_RWD_Effect.span}</span>
                <ul class="list-unstyled">${element_RWD_Effect.li}</ul>
            </div>
        </div>
    </div>
    `
}

// swiper.js with RWD Effect
const Swiper_RWD_Effect = new Swiper('#RWD_Effect', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
      slideShadows: true,
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
    },
    autoplay: {
        delay: 3000,
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