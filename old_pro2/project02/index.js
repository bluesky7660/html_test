//슬라이드 클래스
function slideClassAdd() {
    let categorySliderList = document.querySelectorAll(".category ul li");

    for (let i = 0; i < categorySliderList.length; i++) {
        categorySliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    }
    let previewBoxSliderList = document.querySelectorAll(".previewBox ul li");

    for (let i = 0; i < previewBoxSliderList.length; i++) {
        previewBoxSliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    } 
    let storySliderList = document.querySelectorAll(".story .swiper-slide-container ul li");

    for (let i = 0; i < storySliderList.length; i++) {
        storySliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    }
};
slideClassAdd();

function previewBoxClear() {
    let previewContent = document.querySelectorAll(".previewBox>div>div>div");
       for (let i = 0; i < previewContent.length; i++) {
        previewContent[i].style.display = "none";
 
       } 
};

// 슬라이드
    
    
let swiperOptions1 = {
    slidesPerView: 1,
    loop:true,
    navigation: {
        nextEl: ".category .right-btn",
        prevEl: ".category .left-btn",
    },
    pagination: {
        el: '.category .dots-pagination',
        clickable: true
    },
    on:{
        slideChangeTransitionEnd:function() {
            switch (swiper1.realIndex) {
                case 0:
                    previewBoxClear();
                    document.querySelector(".previewBox>div>div>:nth-child(1)").style.display = "block";
                    
                    break;
                case 1:
                    previewBoxClear();
                    document.querySelector(".previewBox>div>div>:nth-child(2)").style.display = "block";

                    break;
                case 2:
                    previewBoxClear();
                    document.querySelector(".previewBox>div>div>:nth-child(3)").style.display = "block";    
                    break;
            }
            console.log(swiper1.realIndex);
        }
    }
};

let swiper1 = new Swiper(".preview .category .swiper-container", swiperOptions1);

let swiperOptions2 = {
    slidesPerView: 3,
    spaceBetween: 20,
};
let swiper2 = new Swiper(".previewBox .swiper-container-v", swiperOptions2);


//story 슬라이드

let swiper3 = new Swiper('.story .swiper-slide-container .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".story .right-btn",
        prevEl: ".story .left-btn",
    },
});