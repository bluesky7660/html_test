/*
    콘텐츠 사이트
    https://www.porsche.com/korea/ko/

    색감 주는 느낌
    https://www.facebook.com/Tienghansinhdong23/photos/a.2275258782556064/2481694051912535/?type=3&theater

    레이아웃 사이트
    https://www.nexentire.com/kr/
    https://www.hankooktire.com/kr/ko/home.html

    main
    https://files.porsche.com/filestore/image/multimedia/none/rd-2021-homepage-banner-ww-taycancttop-kw11/normal/afe1a81f-825f-11eb-80d3-005056bbdc38;sK;twebp/porsche-normal.webp
    https://files.porsche.com/filestore/image/multimedia/none/rd-2023-homepage-banner-ww-75jahre-kw06/normal/e6d8d6f8-a2f4-11ed-80f9-005056bbdc38;sK;twebp/porsche-normal.webp
    https://files.porsche.com/filestore/image/multimedia/none/rd-2021-homepage-banner-ww-macangtsii-kw43/normal/ffa4be81-319c-11ec-80e2-005056bbdc38;sK;twebp/porsche-normal.webp
    https://files.porsche.com/filestore/image/multimedia/none/rd-2021-homepage-banner-ww-e3-kw05/normal/f457de3e-6013-11eb-80d2-005056bbdc38;sK;twebp/porsche-normal.webp

    차종 배경이미지
    https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-cayenne/small/46131fe5-6694-11e9-80c4-005056bbdc38;sP;twebp;c1693;gc/porsche-small.webp
    https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-macan/small/47db3c6d-e3d7-11eb-80d9-005056bbdc38;sL;twebp;c892;gc/porsche-small.webp
    https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-panamera/small/31077aa2-d337-11ea-80cc-005056bbdc38;sP;twebp;c1693;gc/porsche-small.webp
    https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-taycan/small/094d1c1c-bab0-11e9-80c4-005056bbdc38;sP;twebp;c1693;gc/porsche-small.webp
    https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-911/small/3cf76e8c-6694-11e9-80c4-005056bbdc38;sP;twebp;c1693;gc/porsche-small.webp
    https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-718/small/57ad32c8-ca23-11ec-80ef-005056bbdc38;sL;twebp;c892;gc/porsche-small.webp

    차종별 작은 이미지
    https://nav.porsche.com/00BC524/series-assets/1920/718.jpg
    https://nav.porsche.com/00BC524/series-assets/1920/911.jpg
    https://nav.porsche.com/00BC524/series-assets/1920/taycan.jpg
    https://nav.porsche.com/00BC524/series-assets/1920/panamera.jpg
    https://nav.porsche.com/00BC524/series-assets/1920/macan.jpg
    https://nav.porsche.com/00BC524/series-assets/1920/cayenne.jpg

    차종별 이미지
    https://nav.porsche.com/00BC524/frontshot-assets/1920/718.jpg
    https://nav.porsche.com/00BC524/frontshot-assets/1920/911.jpg
    https://nav.porsche.com/00BC524/frontshot-assets/1920/taycan.jpg
    https://nav.porsche.com/00BC524/frontshot-assets/1920/panamera.jpg
    https://nav.porsche.com/00BC524/frontshot-assets/1920/macan.jpg
    https://nav.porsche.com/00BC524/frontshot-assets/1920/cayenne.jpg

    배경이미지
    https://files.porsche.com/filestore/image/multimedia/none/module-background-leipzig/normal/dc3517d1-1668-11ea-80c6-005056bbdc38;sN/porsche-normal.jpg


    Shopping Tools 이미지
    https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-models/normal/4f278b6a-9703-11e7-b591-0019999cd470;sM;twebp/porsche-normal.webp
    https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-dealersearch/normal/c365840c-687b-11e7-9717-0019999cd470;sQ;twebp/porsche-normal.webp
    https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-financialservice/normal/24394ea0-992d-11e7-b591-0019999cd470;sQ;twebp/porsche-normal.webp
    https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-passion/normal/0630c5ca-9703-11e7-b591-0019999cd470;sQ;twebp/porsche-normal.webp

    Discover이미지
    https://files.porsche.com/filestore/image/multimedia/none/rd-2018-homepage-teaser-ww-e-performance-kw12/normal/f7cc8e7c-6599-11e9-80c4-005056bbdc38;sK;twebp/porsche-normal.webp
    https://files.porsche.com/filestore/image/multimedia/none/rd-2022-homepage-teaser-ww-pds-porschelifestyle-kw22/normal/585df047-db34-11ec-80ef-005056bbdc38;sK;twebp/porsche-normal.webp
    https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-ww-tequipmentsound-design-kw27/normal/e19a7537-5cd4-11e7-9717-0019999cd470;sK;twebp/porsche-normal.webp
    https://files.porsche.com/filestore/image/multimedia/none/rd-2023-homepage-teaser-ptw-partsprice-kw10/normal/c4307ab7-b9c5-11ed-80fb-005056bbdc38;sK;twebp/porsche-normal.webp






*/
//슬라이드 클래스
function slideClassAdd() {
    let mainSliderList = document.querySelectorAll(".main .swiper-container ul li");

    for (let i = 0; i < mainSliderList.length; i++) {
        mainSliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    }
    // let productsSliderList = document.querySelectorAll(".products .swiper-container ul li");

    // for (let i = 0; i < productsSliderList.length; i++) {
    //     productsSliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    // }
    let SliderList = document.querySelectorAll(".swiper-container ul li");

    for (let i = 0; i < SliderList.length; i++) {
        SliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    }
    
};
slideClassAdd();

//검색
function statusChange( statusItem ) {
    var strText = $(statusItem).text();
 
    // strText 에 전체 문자열이 입력된다.
    $("#tt").val(strText);
}

//팝업 숨기고 보이기
function onlight2() {
    document.querySelector('.loginModal').style.opacity = "1";
}
function onblack2() {
    document.querySelector('.loginModal').style.opacity = "0";
}
function onlight3() {
    document.querySelector('.joinUsModal').style.opacity = "1";
}
function onblack3() {
    document.querySelector('.joinUsModal').style.opacity = "0";
}


//차종선택
let exteriorImg = document.querySelector(".exterior .imgBox img");
let exteriorSelect = document.querySelector(".exterior select");
let selectValue = exteriorSelect.options[exteriorSelect.selectedIndex].value;

function changelangSelect() {
    clearTeb2();
    document.querySelector(".exterior-white").classList.add("active");
    exteriorSelect = document.querySelector(".exterior select");
    selectValue = exteriorSelect.options[exteriorSelect.selectedIndex].value;
    
    switch (selectValue) {
        case "718":
            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM1bkhQ5kZFgfNCKZ0DyCYST89orgikIvBBBCr5vvZouNS5Sv6aUNY4W1pZP3aq%25mnw1UjYEeqAxMLRUZx5GVAeJJFmlUsKXbHyXV2YsGjmcPU8Rbd3M85kMsIPBu6n0IwJ5RyoQynX8LYacxwAkdLCPzNdepXHa";
            document.querySelector(".exterior-green").style.display = "block";
            document.querySelector(".exterior-blue").style.display = "block";
            document.querySelector(".exterior-yellow").style.display = "block";
            break;
        case "911":
            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM1wJ5GT6wpNFVEoKyXGb0Q9%25FedfIjIH0Drxw1Y8uz5lsk67yU0CWK1mqb1vH7%25cdJG4bbEeBV7FVWAj1uKQvT8x41z6cR4iLACK";
            document.querySelector(".exterior-green").style.display = "block";
            document.querySelector(".exterior-blue").style.display = "block";
            document.querySelector(".exterior-yellow").style.display = "block";
            break;
        case "Taycan":
            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMIOlhQ5rsRgfNULH0DyAqAT89orKikIvRdBCr4NzZou35ESv6aIrY4W0XAP3aTvUnw1WBdEeqaCrLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
            document.querySelector(".exterior-green").style.display = "block";
            document.querySelector(".exterior-blue").style.display = "block";
            document.querySelector(".exterior-yellow").style.display = "none";
            break;
        case "Panamera":
            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMIOehQ5qaGgfNCzu0Dyo3kT89vljikIvRdBCr4BGZou3y7Sv6wfXY4W9XAP3avsynw1WJ0EeqaZpLRU10oGVA55elZaIPRHS1hKV2vdftDdbySTIraxxsBzpGQSgQ25idlvjXEeBOdZHIKOL75Vv";
            break;
        case "Macan":
            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjIu5PqI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMKNzhQ5Oe9gfN3iKymI4r3IfaFnqU3fUpLBC7vFYvy6EI5mtXxJLDIGNqoDzZ6Km";
            break;
        case "Cayenne":
            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMjr6hQ5rsRgfNULH0DyAqXT89vMGikIvERBCr4VtZou3y7Sv6wNLY4WerNP3a6sDnw1WBJEeqtC3UiuMDwAB65belZaIPRHS1%25cV2vdftDdbySTIrdxrCBzpGQSgQ25idlv%25xEeBOdZHIKOL75Vv";
            document.querySelector(".exterior-green").style.display = "none";
            document.querySelector(".exterior-blue").style.display = "none";
            document.querySelector(".exterior-yellow").style.display = "none";
            break;
    }
}
//할부 선수금
let paymentRange = document.querySelector(".advance-payment input[type='range']");
let advanceTotal = document.querySelector(".advance-payment-total .price input"); 
let advancePayment = document.querySelector(".advance-payment-total .principal span");
let advanceTotalValue = Number(paymentRange.value);
let Cayman718Price = Number(95000000);
let advancePaymentValue = Cayman718Price - advanceTotalValue;

let monthlyPayment = document.querySelector(".monthly-payment .total-price");

let periodRange = document.querySelector(".installment-period input[type='range']");
let installmentTotal = document.querySelector(".installment-period-total input");
let rangeSteps = [3,12,24,36,48,60];
let installmentTotalValue = Number(rangeSteps[periodRange.value]);

let monthlyPaymentValue = advancePaymentValue / installmentTotalValue;


//할부 탭
let carTypeTab = document.querySelectorAll(".car-type-tab>div>div");
let carTitleText1 = document.querySelector(".installment .car-type");
let carTitleText2 = document.querySelector(".installment .car-engine");
let carTitleText3 = document.querySelector(".installment .car-name");
let advancePaymentMaxText = document.querySelector(".advance-payment-contnet .range-max");
let advancePaymentMaxNum = document.querySelector(".advance-payment-contnet .range-box input");

let modelAreaImg = document.querySelector(".modelArea .imgBox img");
let modelAreaTitle = document.querySelector(".modelArea .model-titleBox h3");
let modelAreaText1 = document.querySelector(".modelArea .textBox>div:nth-child(1)");
let modelAreaText2 = document.querySelector(".modelArea .textBox>div:nth-child(2)");
let modelAreaText3 = document.querySelector(".modelArea .textBox>div:nth-child(3)");
let modelAreaPrice = document.querySelector(".modelArea .textBox .price span");



for (let i = 0; i < carTypeTab.length; i++) {
    carTypeTab[i].addEventListener("click",function() {
        clearTeb4();
        this.classList.add("active");
        switch (i) {
            case 0:
                carTitleText1.innerHTML = "718";
                carTitleText2.innerHTML = "2.0L 4-실린더";
                carTitleText3.innerHTML = "Cayman";
                advancePaymentMaxText.innerHTML = "8,600만원";
                advancePaymentMaxNum.setAttribute("max","86000000");
                advancePaymentMaxNum.value = Number(86000000);
                Cayman718Price = Number(95000000);
                advanceTotal.value = Number(86000000).toLocaleString('ko-KR');
                advancePayment.innerHTML = "9,000,000";
                monthlyPayment.innerHTML = "150,000";
                modelAreaImg.src = "https://files.porsche.com/filestore/image/multimedia/none/718-cayman-modelexplorer/normal/21f297c3-2d57-11eb-80d0-005056bbdc38;sO;twebp/porsche-normal.webp";
                modelAreaTitle.innerHTML = "718 Cayman";
                modelAreaText1.innerHTML = "<span>출력</span><span>221kW / 300 PS</span>";
                modelAreaText2.innerHTML = "<span>제로백</span><span>4.9 s</span>";
                modelAreaText3.innerHTML = "<span>최대시속</span><span>275 km / h</span>";
                modelAreaPrice.innerHTML = "91,600,000";
                break;
            case 1:
                carTitleText1.innerHTML = "911";
                carTitleText2.innerHTML = "3.0L 6-실린더";
                carTitleText3.innerHTML = "Carrera Cabriolet";
                advancePaymentMaxText.innerHTML = "1억 6,650만원";
                advancePaymentMaxNum.setAttribute("max","166500000");
                advancePaymentMaxNum.value = Number(166500000);
                Cayman718Price = Number(185000000);
                advanceTotal.value = Number(166500000).toLocaleString('ko-KR');
                advancePayment.innerHTML = "18,500,000";
                monthlyPayment.innerHTML = "308,333";
                modelAreaImg.src = "https://files.porsche.com/filestore/image/multimedia/none/992-c2cab-modelexplorer-04/normal/81ea4749-cf38-11eb-80d9-005056bbdc38;sO;twebp/porsche-normal.webp";
                modelAreaTitle.innerHTML = "911 Carrera Cabriolet";
                modelAreaText1.innerHTML = "<span>출력</span><span>288kW / 392 PS</span>";
                modelAreaText2.innerHTML = "<span>제로백</span><span>4.4 s</span>";
                modelAreaText3.innerHTML = "<span>최대시속</span><span>291 km / h</span>";
                modelAreaPrice.innerHTML = "174,600,000";
                break;
            case 2:
                carTitleText1.innerHTML = "Taycan";
                carTitleText2.innerHTML = "레이싱 엔진";
                carTitleText3.innerHTML = "4S";
                advancePaymentMaxText.innerHTML = "1억 3,950만원";
                advancePaymentMaxNum.setAttribute("max","139500000");
                advancePaymentMaxNum.value = Number(139500000);
                Cayman718Price = Number(155000000);
                advanceTotal.value = Number(139500000).toLocaleString('ko-KR');
                advancePayment.innerHTML = "15,500,000";
                monthlyPayment.innerHTML = "258,333";
                modelAreaImg.src = "https://files.porsche.com/filestore/image/multimedia/none/j1-taycan-4s-modelexplorer-01/normal/032fa292-7837-11eb-80d3-005056bbdc38;sO;twebp/porsche-normal.webp";
                modelAreaTitle.innerHTML = "Taycan 4S";
                modelAreaText1.innerHTML = "<span>출력</span><span>390kW / 530 PS</span>";
                modelAreaText2.innerHTML = "<span>제로백</span><span>4.0 s</span>";
                modelAreaText3.innerHTML = "<span>최대시속</span><span>250 km / h</span>";
                modelAreaPrice.innerHTML = "148,500,000";
                break;
            case 3:
                carTitleText1.innerHTML = "Panamera";
                carTitleText2.innerHTML = "2.9L V6 하이브리드";
                carTitleText3.innerHTML = "4 E-Hybrid";
                advancePaymentMaxText.innerHTML = "1억 3,500만원";
                advancePaymentMaxNum.setAttribute("max","135000000");
                advancePaymentMaxNum.value = Number(135000000);
                Cayman718Price = Number(150000000);
                advanceTotal.value = Number(135000000).toLocaleString('ko-KR');
                advancePayment.innerHTML = "15,000,000";
                monthlyPayment.innerHTML = "250,000";
                modelAreaImg.src = "https://files.porsche.com/filestore/image/multimedia/none/971-g2-2nd-4-e-hy-modelexplorer/normal/47001298-fd96-11ea-80ce-005056bbdc38;sO;twebp/porsche-normal.webp";
                modelAreaTitle.innerHTML = "Panamera 4 E-Hybrid";
                modelAreaText1.innerHTML = "<span>출력</span><span>340kW / 462 PS</span>";
                modelAreaText2.innerHTML = "<span>제로백</span><span>4.4 s</span>";
                modelAreaText3.innerHTML = "<span>최대시속</span><span>280 km / h</span>";
                modelAreaPrice.innerHTML = "173,600,000";
                break;
            case 4:
                carTitleText1.innerHTML = "Macan";
                carTitleText2.innerHTML = "2.9L V6";
                carTitleText3.innerHTML = "S";
                advancePaymentMaxText.innerHTML = "8,910만원";
                advancePaymentMaxNum.setAttribute("max","89100000");
                advancePaymentMaxNum.value = Number(89100000);
                Cayman718Price = Number(99000000);
                advanceTotal.value = Number(89100000).toLocaleString('ko-KR');
                advancePayment.innerHTML = "9,900,000";
                monthlyPayment.innerHTML = "165,000";
                modelAreaImg.src = "https://files.porsche.com/filestore/image/multimedia/none/pa3-s-modelexplorer/normal/6d584fbb-c478-11ec-80ef-005056bbdc38;sO;twebp/porsche-normal.webp";
                modelAreaTitle.innerHTML = "Macan S";
                modelAreaText1.innerHTML = "<span>출력</span><span>280kW / 380 PS</span>";
                modelAreaText2.innerHTML = "<span>제로백</span><span>4.8 s</span>";
                modelAreaText3.innerHTML = "<span>최대시속</span><span>259 km / h</span>";
                modelAreaPrice.innerHTML = "103,000,000";
                break;
            case 5:
                carTitleText1.innerHTML = "Cayenne";
                carTitleText2.innerHTML = "4.0L V8";
                carTitleText3.innerHTML = "Coupé";
                advancePaymentMaxText.innerHTML = "1억 800만원";
                advancePaymentMaxNum.setAttribute("max","108000000");
                advancePaymentMaxNum.value = Number(108000000);
                Cayman718Price = Number(120000000);
                advanceTotal.value = Number(108000000).toLocaleString('ko-KR');
                advancePayment.innerHTML = "12,000,000";
                monthlyPayment.innerHTML = "200,000";
                modelAreaImg.src = "https://files.porsche.com/filestore/image/multimedia/none/9yb-e3-c-modelexplorer-01/normal/96eb341b-9149-11eb-80d4-005056bbdc38;sO;twebp/porsche-normal.webp";
                modelAreaTitle.innerHTML = "Cayenne Coupé";
                modelAreaText1.innerHTML = "<span>출력</span><span>255kW / 347 PS</span>";
                modelAreaText2.innerHTML = "<span>제로백</span><span>6.0 s</span>";
                modelAreaText3.innerHTML = "<span>최대시속</span><span>243 km / h</span>";
                modelAreaPrice.innerHTML = "126,200,000";
                break;
        }
    })
    
}
function clearTeb4() {
    for (let i = 0; i < carTypeTab.length; i++) {
        carTypeTab[i].classList.remove("active");
    }
}

paymentRange.oninput = function() {
    advanceTotalValue = Number(this.value);
    advanceTotal.value = advanceTotalValue.toLocaleString('ko-KR');
    advancePaymentValue = Cayman718Price - advanceTotalValue;
    advancePayment.innerHTML  = advancePaymentValue.toLocaleString('ko-KR');
    monthlyPaymentValue = advancePaymentValue / installmentTotalValue;
    monthlyPaymentValue = Math.floor(monthlyPaymentValue);
    monthlyPayment.innerHTML = monthlyPaymentValue.toLocaleString('ko-KR');
}

//함부 기간


periodRange.oninput = function() {
    installmentTotalValue = Number(rangeSteps[this.value]);
    installmentTotal.value = installmentTotalValue.toLocaleString('ko-KR');
    monthlyPaymentValue = Math.floor(monthlyPaymentValue);
    monthlyPaymentValue = advancePaymentValue / installmentTotalValue;
    monthlyPayment.innerHTML = monthlyPaymentValue.toLocaleString('ko-KR');
}

//콤마
function comma() {
    let advanceTotalValue = Number(advanceTotal.value);
    advanceTotal.value = advanceTotalValue.toLocaleString('ko-KR');
}
comma();

//컬러 초기화
function clearTeb2() {
    let exteriorColor = document.querySelectorAll(".exterior .exterior-color ul li");
    for (let i = 0; i < exteriorColor.length; i++) {
        exteriorColor[i].classList.remove("active");
    }
}



//로딩후
window.onload = function() {
    
    let navBlackBg = document.querySelector(".nav-black-bg");
    let blackBg = document.querySelector(".black-bg");
    let bodyArea = document.querySelector("body");

    //토글 클래스 추가
    function toggleSelectBox(selectBox) {
        selectBox.classList.toggle("active");
    };

    //main슬라이드
    let mySwiper1 = new Swiper(".main .swiper-container", {
        slidesPerView: 1,
        loop : true,
        autoplay: {
            autoplay: true,     
            delay: 2000, 
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".main .right-btn",
            prevEl: ".main .left-btn",
        },
        pagination: {
            el: '.main .dots-pagination',
            clickable: true
        },
        on: {
            resize: function() {
              this.autoplay.stop(); // 리사이징 시 자동 슬라이드 정지
              this.autoplay.start(); // 리사이징 시 자동 슬라이드 재시작
            }
        }
    });

    //products tabs 슬라이드
    let mySwiper2 = new Swiper(".products .tabs .swiper-container", {
        slidesPerView: 1,
        loop : true,
        navigation: {
            nextEl: ".products .right-btn",
            prevEl: ".products .left-btn",
        },
        pagination: {
            el: '.products .dots-pagination',
            clickable: true
        },
    });
    //products cotnent out슬라이드
    let mySwiper3 = new Swiper(".products .swiper-container-h", {
        slidesPerView: 1,
        loop : true,
        spaceBetween: 1000,
        allowTouchMove: false,
        // nested: true
    });
    //products cotnent inner슬라이드
    let mySwiper4 = new Swiper(".products .swiper-container-v", {
        slidesPerView: "1.5",
        spaceBetween: 20,
        grabCursor: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
        },
        breakpoints: { 
            768: {
                slidesPerView: 3,
            },
        },
        nested: true
    });
    mySwiper2.controller.control = mySwiper3;
    mySwiper3.controller.control = mySwiper2;

    //shoppingTools 탭
    let imgTab = document.querySelectorAll(".shoppingTools .content>div>div");
    for (let i = 0; i < imgTab.length; i++) {
        imgTab[i].addEventListener("click",function() {
            clearTeb1();
            this.classList.add("active");
        });
    }
    function clearTeb1() {
        for (let i = 0; i < imgTab.length; i++) {
            imgTab[i].classList.remove("active");
        }
    }

    //discover슬라이드
    let mySwiper5 = new Swiper(".discover .swiper-container", {
        slidesPerView: "1.2",
        spaceBetween: 21,
        pagination: {
            el: '.discover .dots-pagination',
            clickable: true
        },
        breakpoints: { 
            768: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
        },
    });

    //exterior color
    let exteriorColor = document.querySelectorAll(".exterior .exterior-color ul li");
    
    
    for (let i = 0; i < exteriorColor.length; i++) {
        exteriorColor[i].addEventListener("click",function() {
            clearTeb2();
            this.classList.add("active");
            switch (i) {
                case 0:
                    switch (selectValue) {
                        case "718":
                            exteriorImg.src = "./img/purchase-car-color01.jpg";
                            break;
                        case "911":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMIOlhQ5rsRgfNUAI0Dyo1cT89oCBikIvRtBCr4NzZou35ESv6aIrY4WoyhP3a6icnw1WhkEeqtI3UiscWwAB658elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo";
                            break;
                        case "Taycan":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMIOlhQ5rsRgfNULH0DyAqAT89orKikIvRdBCr4NzZou35ESv6aIrY4W0XAP3aTvUnw1WBdEeqaCrLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
                            break;
                        case "Cayenne":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMjr6hQ5rsRgfNULH0DyAqXT89vMGikIvERBCr4VtZou3y7Sv6wNLY4WerNP3a6sDnw1WBJEeqtC3UiuMDwAB65belZaIPRHS1%25cV2vdftDdbySTIrdxrCBzpGQSgQ25idlv%25xEeBOdZHIKOL75Vv";
                            break;
                    }
                    break;
                case 1:
                    switch (selectValue) {
                        case "718":
                            exteriorImg.src = "./img/purchase-car-color02.jpg";
                            break;
                        case "911":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQeR8aifY3O1BDYSUqZ8PFJUSknQrAYCEKdlPo48kHnvYf62E4oqOcL3v6ZdGwJxEeqtI3UiscWwAB658elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo";
                            break;
                        case "Taycan":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQetmaifRwR1BDYkgqZ8PFsUSknQrAYCEKdlPo48kHnvaNR2E41PecL3vUsdGw4SktFepzLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
                            break;
                        case "Cayenne":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9ko60KkzFWTQetmaifRwN1BDPpMqZ8PdFUSknXJAYCEfulPoLQtHnvGkQ2E4ozicL3vU7dGwJxEeqtC3UiuMDwAB65belZaIPRHS1%25cV2vdftDdbySTIrdxrCBzpGQSgQ25idlv%25xEeBOdZHIKOL75Vv";
                            break;
                    }
                    break;
                case 2:
                    switch (selectValue) {
                        case "718":
                            exteriorImg.src = "./img/purchase-car-color03.jpg";
                            break;
                        case "911":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQeR8aifY3O1BDYSUqZ8PFJUSknQrAYCEKdlPo48kHnvYf62E4oqOcL3v6ZdGwJ8EeqzO3UiscWwAB658elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo";
                            break;
                        case "Taycan":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9V7KMIOlhQ5rsRgfNULH0DyAqAT89orKikIvRdBCr4NzZou35ESv6aIrY4W0XAP3aTvUnw1WBdEeqaCrLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
                            break;
                        case "Cayenne":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9V7KMjr6hQ5rsRgfNULH0DyAqXT89vMGikIvERBCr4VtZou3y7Sv6wNLY4WerNP3a6sDnw1WBJEeqtC3UiuMDwAB65belZaIPRHS1%25cV2vdftDdbySTIrdxrCBzpGQSgQ25idlv%25xEeBOdZHIKOL75Vv";
                            break;
                    }
                    break;
                case 3:
                    switch (selectValue) {
                        case "718":
                            exteriorImg.src = "./img/purchase-car-color08.jpg";
                            break;
                        case "911":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3L7KM1oLhQ5kKpNFVEoKyXGb0Q9%25FedfIjIH0Drxw1Y8uz5lsk67ywBCWK1mqb1vH7%25cdJG4bbEeBV7FVWAj1uKQvT8x41z6cR4iLACK";
                            break;
                        case "Taycan":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQetmaifRwR1BDYkgqZ8PFsUSknQrAYCEKdlPo48kHnvaNR2E41PecL3vUsdGw4SktFepgLRU7ouGVAvQZFml4fzXbH33Y%25O205mcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
                            break;
                    }
                    break;
                case 4:
                    switch (selectValue) {
                        case "718":
                            exteriorImg.src = "./img/purchase-car-color07.jpg";
                            break;
                        case "911":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3L7KM1oLhQ5XdYgfNMja0Dy5GsT898maikIfuDrxw1Y8uz5lsk67ywBCWK1mqb1vH7%25cdJG4bbEeBV7FVWAj1uKQvT8x41z6cR4iLACK";
                            break;
                        case "Taycan":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8P7KMIOlhQ5rsRgfNULH0DyAqAT89orKikIvRdBCr4NzZou35ESv6aIrY4W0XAP3aTvUnw1WBdEeqaCrLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
                            break;
                    }
                    break;
                case 5:
                    switch (selectValue) {
                        case "718":
                            exteriorImg.src = "./img/purchase-car-color04.jpg";
                            break;
                        case "911":
                            exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3L7KM1oLhQ5XdYgfNMja0Dy5GsT898maikIL3HBCrKVzZounGk67ywBCWK1mqb1vH7%25cdJG4bbEeBV7FVWAj1uKQvT8x41z6cR4iLACK";
                            break;
                    }
                    break;
            }
        });
        
    }
    function clearTeb2() {
        for (let i = 0; i < exteriorColor.length; i++) {
            exteriorColor[i].classList.remove("active");
        }
    }

    
    //sns슬라이드
    let mySwiper6 = new Swiper(".sns .swiper-container", {
        slidesPerView: "1.2",
        spaceBetween: 21,
        grabCursor: true,
        pagination: {
            el: '.sns .dots-pagination',
            clickable: true
        },
        breakpoints: { 
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    //top버튼
    document.querySelector(".topBtn").addEventListener("click", () => {
        window.scrollTo({top:0, behavior:"smooth"});
    });
    //top버튼숨기기
    window.addEventListener('scroll', () => { 
        const viewportHeight = window.innerHeight;
        const scrolltop = document.documentElement.scrollTop; 
        if (scrolltop > 400) {
            document.querySelector(".topBtn").style.display = "block";
        }
        else{
            document.querySelector(".topBtn").style.display = "none";
        }
    });
  
    //range input 값변경시 색상변경
    let rangeBoxInput = document.querySelectorAll('.range-box input');
    for (let i = 0; i < rangeBoxInput.length; i++) {
        rangeBoxInput[i].addEventListener('input',function(event){
          let gradient_value = 100 / event.target.attributes.max.value;
          event.target.style.background = 'linear-gradient(to right, #000 0%, #000 '+gradient_value * event.target.value +'%, rgb(236, 236, 236) ' + gradient_value *  event.target.value + '%, rgb(236, 236, 236) 100%)';
        });
    }
  
}


