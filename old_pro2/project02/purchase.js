/*이미지 변환 */
let largeImg = document.querySelector(".large-img img");
let smallImgsArea = document.querySelectorAll(".small-imgs>div");
let smallImgs = document.querySelectorAll(".small-imgs>div img");
let colorList = document.querySelectorAll(".color-list>div");

for (let i = 0; i < smallImgsArea.length; i++) {
    smallImgsArea[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                largeImg.src = smallImgs[0].src;
                colorList[0].classList.add("active");
                colorList[1].classList.remove("active");
                colorList[2].classList.remove("active");
                colorList[3].classList.remove("active");
                smallImgsArea[0].classList.add("active");
                smallImgsArea[1].classList.remove("active");
                smallImgsArea[2].classList.remove("active");
                smallImgsArea[3].classList.remove("active");
                break;
            case 1:
                largeImg.src = smallImgs[1].src;
                colorList[0].classList.remove("active");
                colorList[1].classList.add("active");
                colorList[2].classList.remove("active");
                colorList[3].classList.remove("active");
                smallImgsArea[0].classList.remove("active");
                smallImgsArea[1].classList.add("active");
                smallImgsArea[2].classList.remove("active");
                smallImgsArea[3].classList.remove("active");
                break;
            case 2:
                largeImg.src = smallImgs[2].src;
                colorList[0].classList.remove("active");
                colorList[1].classList.remove("active");
                colorList[2].classList.add("active");
                colorList[3].classList.remove("active");
                smallImgsArea[0].classList.remove("active");
                smallImgsArea[1].classList.remove("active");
                smallImgsArea[2].classList.add("active");
                smallImgsArea[3].classList.remove("active");
                break;
            case 3:
                largeImg.src = smallImgs[3].src;
                colorList[0].classList.remove("active");
                colorList[1].classList.remove("active");
                colorList[2].classList.remove("active");
                colorList[3].classList.add("active");
                smallImgsArea[0].classList.remove("active");
                smallImgsArea[1].classList.remove("active");
                smallImgsArea[2].classList.remove("active");
                smallImgsArea[3].classList.add("active");
                break;
        }
    });
}


for (let i = 0; i < colorList.length; i++) {
    colorList[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                largeImg.src = smallImgs[0].src;
                colorList[0].classList.add("active");
                colorList[1].classList.remove("active");
                colorList[2].classList.remove("active");
                colorList[3].classList.remove("active");
                smallImgsArea[0].classList.add("active");
                smallImgsArea[1].classList.remove("active");
                smallImgsArea[2].classList.remove("active");
                smallImgsArea[3].classList.remove("active");
                break;
            case 1:
                largeImg.src = smallImgs[1].src;
                colorList[0].classList.remove("active");
                colorList[1].classList.add("active");
                colorList[2].classList.remove("active");
                colorList[3].classList.remove("active");
                smallImgsArea[0].classList.remove("active");
                smallImgsArea[1].classList.add("active");
                smallImgsArea[2].classList.remove("active");
                smallImgsArea[3].classList.remove("active");
                break;
            case 2:
                largeImg.src = smallImgs[2].src;
                colorList[0].classList.remove("active");
                colorList[1].classList.remove("active");
                colorList[2].classList.add("active");
                colorList[3].classList.remove("active");
                smallImgsArea[0].classList.remove("active");
                smallImgsArea[1].classList.remove("active");
                smallImgsArea[2].classList.add("active");
                smallImgsArea[3].classList.remove("active");
                break;
            case 3:
                largeImg.src = smallImgs[3].src;
                colorList[0].classList.remove("active");
                colorList[1].classList.remove("active");
                colorList[2].classList.remove("active");
                colorList[3].classList.add("active");
                smallImgsArea[0].classList.remove("active");
                smallImgsArea[1].classList.remove("active");
                smallImgsArea[2].classList.remove("active");
                smallImgsArea[3].classList.add("active");
                break;
        }
    });
}

/* 커스텀 셀렉트 */
let selectedBox = document.querySelector(".selected-box");
let selectMenu = document.querySelector(".select-menu");
let selectMenus =  document.querySelectorAll(".select-menu>div");
let selecteds = document.querySelectorAll(".selecteds-add-area>div");
let selectCount = 0;
let addCount = [0,0,0];

/*추가 영역 */
let selectedsAddArea = document.querySelector("selecteds-add-area");

selectedBox.addEventListener("click",() => {
    if(selectCount == 0){
        selectMenu.style.maxHeight = "267px";
        selectedBox.classList.add("active");
        selectCount = 1;
    }
    else{
        selectMenu.style.maxHeight = "0";
        selectedBox.classList.remove("active");
        selectCount = 0;
    }
});



/*숫자 +- 버튼 , 계산*/
let value =  Number(1);
let quantity = [0,0,0,1];

// 숫자 값을 표시할 요소 선택
let numberInput = document.querySelectorAll('.number-input input');

//금액
let productPrice = document.querySelector(".product-quantity .price span");
let productPriceNum = Number(359000);
let productPriceTotal = productPriceNum * value;
let selectPrice1 = document.querySelector(".selected-add-area.selected1 .price span");
let selectPrice1Num = Number(1500);
let selectPrice2 = document.querySelector(".selected-add-area.selected2 .price span");
let selectPrice2Num = Number(4500);
let selectPrice3 = document.querySelector(".selected-add-area.selected3 .price span");
let selectPrice3Num = Number(6000);
let selectPrice1Total = selectPrice1Num * value;

let selectPricesTotal = (selectPrice1Num * value) + (selectPrice2Num * value) + (selectPrice3Num * value);

/*총합 */
let totalPrice = document.querySelector(".total-price span");
let totalPriceNum = Number(359000);
let totalQuantity = document.querySelector(".total-quantity span");
let totalQuantityNum = Number(2);

// 올리기 버튼과 내리기 버튼 요소 선택
let increaseButton = document.querySelectorAll('.increase-button');
let decreaseButton = document.querySelectorAll('.decrease-button');


// 올리기 버튼 클릭 이벤트 처리
for (let i = 0; i < increaseButton.length; i++) {
    increaseButton[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                value = Number(numberInput[0].value);
                if (value > 99) {
                    value = 99;
                }
                value++;
                quantity[0] = value;
                totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                selectPrice1.innerHTML = (selectPrice1Num * value).toLocaleString('ko-KR');
                selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                break;
            case 1:
                value = Number(numberInput[1].value);
                if (value > 99) {
                    value = 99;
                }
                value++;
                quantity[1] = value;
                totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                selectPrice2.innerHTML = (selectPrice2Num * value).toLocaleString('ko-KR');
                selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                break;
            case 2:
                value = Number(numberInput[2].value);
                if (value > 99) {
                    value = 99;
                }
                value++;
                quantity[2] = value;
                totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                selectPrice3.innerHTML = (selectPrice3Num * value).toLocaleString('ko-KR');
                selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                break;
            case 3:
                value = Number(numberInput[3].value);
                if (value > 9) {
                    value = 9;
                }
                value++;
                quantity[3] = value;
                totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                productPrice.innerHTML = (productPriceNum * value).toLocaleString('ko-KR');
                selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                break;
        }
        numberInput[i].value = value;
        
    });
}


// 내리기 버튼 클릭 이벤트 처리
for (let i = 0; i < decreaseButton.length; i++) {
    decreaseButton[i].addEventListener('click', () => {
        
        switch (i) {
            case 0:
                value = Number(numberInput[0].value);
                break;
            case 1:
                value = Number(numberInput[1].value);
                break;
            case 2:
                value = Number(numberInput[2].value);
                break;
            case 3:
                value = Number(numberInput[3].value);
                break;
        }
        if (value > 1) {
            value--;
            switch (i) {
                case 0:
                    quantity[0] = value;
                    totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                    selectPrice1.innerHTML = (selectPrice1Num * value).toLocaleString('ko-KR');
                    selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                    totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                    break;
                case 1:
                    quantity[1] = value;
                    totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                    selectPrice2.innerHTML = (selectPrice2Num * value).toLocaleString('ko-KR');
                    selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                    totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                    break;
                case 2:
                    quantity[2] = value;
                    totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                    selectPrice3.innerHTML = (selectPrice3Num * value).toLocaleString('ko-KR');
                    selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                    totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                    break;
                case 3:
                    quantity[3] = value;
                    totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                    productPrice.innerHTML = (productPriceNum * value).toLocaleString('ko-KR');
                    selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                    totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                    break;
            }
            numberInput[i].value = value;
        }
        
    });
}

/* 숫자가 아니거 1 미만 일때 */
for (let i = 0; i < numberInput.length; i++) {
    numberInput[i].addEventListener('input', function() {
        let value = parseInt(this.value);
        console.log(value);
        if (value < 0) {
            this.value = 1;
            value = 1;
        }
        else if(isNaN(value)){
            this.value = 1;
            value = 1;
        }
        switch (i) {
            case 0:
                if (value > 100) {
                    this.value = 100;
                    value = 100;
                }
                quantity[0] = value;
                totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                selectPrice1.innerHTML = (selectPrice1Num * value).toLocaleString('ko-KR');
                selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                break;
            case 1:
                if (value > 100) {
                    this.value = 100;
                    value = 100;
                }
                quantity[1] = value;
                totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                selectPrice2.innerHTML = (selectPrice2Num * value).toLocaleString('ko-KR');
                selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                break;
            case 2:
                if (value > 100) {
                    this.value = 100;
                    value = 100;
                }
                quantity[2] = value;
                totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                selectPrice3.innerHTML = (selectPrice3Num * value).toLocaleString('ko-KR');
                selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                break;
            case 3:
                if (value > 10) {
                    this.value = 10;
                    value = 10;
                }
                quantity[3] = value;
                totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
                productPrice.innerHTML = (productPriceNum * value).toLocaleString('ko-KR');
                selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
                totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
                break;
        }
    });
}


/*샐렉 선택시 추가옵션 */
for (let i = 0; i < selectMenus.length; i++) {
    selectMenus[i].addEventListener("click",() => {
        if(selectCount == 0){
            selectMenu.style.maxHeight = "267px";
            selectedBox.classList.add("active");
            selectCount = 1;
        }
        else{
            selectMenu.style.maxHeight = "0";
            selectedBox.classList.remove("active");
            selectCount = 0;
        }
        switch (i) {
            case 0:
                if (addCount[i] == 0) {
                    selecteds[0].style.display = "block";
                    quantity[0] = 1;
                    addCount[i] = 1;
                }
                else{
                    // selecteds[0].style.display = "none";
                    // quantity[0] = 0;
                    alert("이미 선택된 옵션입니다.")
                    addCount[i] = 0;
                }             
                break;
            case 1:
                if (addCount[i] == 0) {
                    selecteds[1].style.display = "block";
                    quantity[1] = 1;
                    addCount[i] = 1;
                }
                else{
                    // selecteds[1].style.display = "none";
                    // quantity[1] = 0;
                    alert("이미 선택된 옵션입니다.")
                    addCount[i] = 0;
                }
                break;
            case 2:
                if (addCount[i] == 0) {
                    selecteds[2].style.display = "block";
                    quantity[2] = 1;
                    addCount[i] = 1;
                }
                else{
                    // selecteds[2].style.display = "none";
                    // quantity[2] = 0;
                    alert("이미 선택된 옵션입니다.")
                    addCount[i] = 0;
                }
                
                break;
        }
        totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
        selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
        totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
    });
    
}

/*추가옵션 취소하기 */
let selectedRemove = document.querySelectorAll(".selected-remove-btn");
for (let i = 0; i < selectedRemove.length; i++) {
    selectedRemove[i].addEventListener("click",() => {
        switch (i) {
            case 0:
                selecteds[i].style.display = "none";
                quantity[0] = 0;
                addCount[i] = 0;
                numberInput[0].value = 0;
                break;
            case 1:
                selecteds[i].style.display = "none";
                quantity[1] = 0;
                addCount[i] = 0;
                numberInput[1].value = 0;
                break;
            case 2:
                selecteds[i].style.display = "none";
                quantity[2] = 0;
                addCount[i] = 0;
                numberInput[2].value = 0;
                break;
        }
        totalQuantity.innerHTML = quantity[0] + quantity[1] + quantity[2] + quantity[3];
        selectPricesTotal = (selectPrice1Num * quantity[0]) + (selectPrice2Num * quantity[1]) + (selectPrice3Num * quantity[2]);
        totalPrice.innerHTML = (selectPricesTotal + (productPriceNum * quantity[3])).toLocaleString('ko-KR');
    });
}



/*탭 선택시 영역으로 화면 스크롤 */
let tabs = document.querySelectorAll(".tabs>div>div");
let review = document.querySelector(".purchase-review");
let information = document.querySelector(".detailed-information");
let qna = document.querySelector(".qna");
let exchange = document.querySelector(".exchange");
let scrollElementOffsetTop;
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                scrollElementOffsetTop = review.offsetTop;
                console.log(this);
                tabs[0].classList.add("active");
                tabs[1].classList.remove("active");
                tabs[2].classList.remove("active");
                tabs[3].classList.remove("active");
                break;
            case 1:
                scrollElementOffsetTop = information.offsetTop;
                tabs[0].classList.remove("active");
                tabs[1].classList.add("active");
                tabs[2].classList.remove("active");
                tabs[3].classList.remove("active");
                break;
            case 2:
                scrollElementOffsetTop = qna.offsetTop;
                tabs[0].classList.remove("active");
                tabs[1].classList.remove("active");
                tabs[2].classList.add("active");
                tabs[3].classList.remove("active");
                break;
            case 3:
                scrollElementOffsetTop = exchange.offsetTop;
                tabs[0].classList.remove("active");
                tabs[1].classList.remove("active");
                tabs[2].classList.remove("active");
                tabs[3].classList.add("active");
                break;
        }
        scrollElementOffsetTop = scrollElementOffsetTop - 100;
        window.scrollTo({
          top: scrollElementOffsetTop,
          behavior: 'smooth'
        });
    });   
}
