//슬라이드 클래스
function slideClassAdd() {
    let SliderList = document.querySelectorAll(".swiper-container ul li");

    for (let i = 0; i < SliderList.length; i++) {
        SliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    }
    
};
slideClassAdd();


/*슬라이드 */
let mySwiper1 = new Swiper(".design .swiper-container", {
    slidesPerView: 1.5,
    loop : true,
    loopAdditionalSlides:1,
    observer: true,
    observeParents: true,

    loopFillGroupWithBlank : true,
    slideToClickedSlide : true,
    spaceBetween: 20,
    breakpoints: { 
        1024:{
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.design .dots-pagination',
        clickable: false,
    },
});

/*911 모델 */
let typeTabs = document.querySelectorAll(".tabs>div");
let coupé = document.querySelectorAll(".coupé");
let cabriolet = document.querySelectorAll(".cabriolet");
let targa = document.querySelectorAll(".car-911-models .content ul li.targa");
let modelArea = document.querySelector(".car-911-models .content>ul");


for (let i = 0; i < typeTabs.length; i++) {
    typeTabs[i].addEventListener("click",function() {
        clearTypeTabs();
        this.classList.add("active");
        
        if (this.classList.contains("type-all")) {
            targa[3].classList.add("active");
            coupéOn();
            cabrioletOn();
            targaOn();
        }
        else if (this.classList.contains("type-coupé")) {
            targa[3].classList.remove("active");
            coupéOn();
            cabrioletOff();
            targaOff();
        }
        else if (this.classList.contains("type-cabriolet")) {
            targa[3].classList.remove("active");
            coupéOff();
            cabrioletOn();
            targaOff();
        }
        else if (this.classList.contains("type-targa")) {
            targa[3].classList.remove("active");
            coupéOff();
            cabrioletOff();
            targaOn();
        }
    });
}

function clearTypeTabs() {
    for (let i = 0; i < typeTabs.length; i++) {
        typeTabs[i].classList.remove("active");
    }
}

function coupéOn() {
    for (let i = 0; i < coupé.length; i++) {
        coupé[i].style.display = "block";
    }
}
function coupéOff() {
    for (let i = 0; i < coupé.length; i++) {
        coupé[i].style.display = "none";
    }
}

function cabrioletOn() {
    for (let i = 0; i < cabriolet.length; i++) {
        cabriolet[i].style.display = "block";
    }
}
function cabrioletOff() {
    for (let i = 0; i < cabriolet.length; i++) {
        cabriolet[i].style.display = "none";
    }
}

function targaOn() {
    for (let i = 0; i < targa.length; i++) {
        targa[i].style.display = "block";
    }
}
function targaOff() {
    for (let i = 0; i < targa.length; i++) {
        targa[i].style.display = "none";
    }
}
