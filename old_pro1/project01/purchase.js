//견적내기
let colorPrice = Number(0);
let wheelsPrice = Number(0);
let individualPrice = Number(0);
let conveniencePrice = Number(0);

//총합 계산
let totalPrice = Number(91600000);  //.toLocaleString('ko-KR') 한국식 숫자콤마
let totalPriceText = document.querySelector(".car-price .price span");

//탭
let purchaseTab = document.querySelectorAll(".tabs>div>div");
let purchaseList = document.querySelectorAll(".option-area>div>ul>li");

for (let i = 0; i < purchaseTab.length; i++) {
    purchaseTab[i].addEventListener("click",function() {
        clearPurchaseTab();
        this.classList.add("active");
        switch (i) {
            case 0:
                clearPurchaseList();
                purchaseList[i].classList.add("active");
                break;
            case 1:
                clearPurchaseList();
                purchaseList[i].classList.add("active");
                break;
            case 2:
                clearPurchaseList();
                purchaseList[i].classList.add("active");
                break;
            case 3:
                clearPurchaseList();
                purchaseList[i].classList.add("active");
                break;
        }
    });
}
function clearPurchaseTab() {
    for (let i = 0; i < purchaseTab.length; i++) {
        purchaseTab[i].classList.remove("active");
    }
}
function clearPurchaseList() {
    for (let i = 0; i < purchaseList.length; i++) {
        purchaseList[i].classList.remove("active");
    }
}

//exterior color
let exteriorColor = document.querySelectorAll(".color-list li");
let previewImg = document.querySelector(".preview-area .imgBox img");
    
    
for (let i = 0; i < exteriorColor.length; i++) {
    exteriorColor[i].addEventListener("click",function() {
        clearExteriorColor();
        this.classList.add("active");
        switch (i) {
            case 0:
                previewImg.src="./img/purchase-car-color01.jpg";
                colorPrice = Number(0);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 1:
                previewImg.src="./img/purchase-car-color02.jpg";
                colorPrice = Number(0);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 2:
                previewImg.src="./img/purchase-car-color03.jpg";
                colorPrice = Number(0);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 3:
                previewImg.src="./img/purchase-car-color04.jpg";
                colorPrice = Number(0);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 4:
                previewImg.src="./img/purchase-car-color05.jpg";
                colorPrice = Number(1300000);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 5:
                previewImg.src="./img/purchase-car-color06.jpg";
                colorPrice = Number(1300000);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 6:
                previewImg.src="./img/purchase-car-color07.jpg";
                colorPrice = Number(3400000);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 7:
                previewImg.src="./img/purchase-car-color08.jpg";
                colorPrice = Number(3400000);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 8:
                previewImg.src="./img/purchase-car-color09.jpg";
                colorPrice = Number(3400000);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
        }
        // switch (i) {
        //     case 0:
        //         switch (selectValue) {
        //             case "718":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM1bkhQ5kZFgfNCKZ0DyCYST89orgikIvBBBCr5vvZouNS5Sv6aUNY4W1pZP3aq%25mnw1UjYEeqAxMLRUZx5GVAeJJFmlUsKXbHyXV2YsGjmcPU8Rbd3M85kMsIPBu6n0IwJ5RyoQynX8LYacxwAkdLCPzNdepXHa";
        //                 break;
        //             case "911":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMIOlhQ5rsRgfNUAI0Dyo1cT89oCBikIvRtBCr4NzZou35ESv6aIrY4WoyhP3a6icnw1WhkEeqtI3UiscWwAB658elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo";
        //                 break;
        //             case "Taycan":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMIOlhQ5rsRgfNULH0DyAqAT89orKikIvRdBCr4NzZou35ESv6aIrY4W0XAP3aTvUnw1WBdEeqaCrLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
        //                 break;
        //             case "Cayenne":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMjr6hQ5rsRgfNULH0DyAqXT89vMGikIvERBCr4VtZou3y7Sv6wNLY4WerNP3a6sDnw1WBJEeqtC3UiuMDwAB65belZaIPRHS1%25cV2vdftDdbySTIrdxrCBzpGQSgQ25idlv%25xEeBOdZHIKOL75Vv";
        //                 break;
        //         }
        //         break;
        //     case 1:
        //         switch (selectValue) {
        //             case "718":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3jZ60KZA5WTQSgAaifSHl1BDYkWqZ8PUUUSkKPPAYCQlKlPo4eQHnv3hA2E4wy%25cL3e9HdGwRIptFeAIKMXRG775%25VezgNjmfgXbHyXV2YsGjmcPU8Rbd3M85kMsIPBu6n0IwJ5RyoQynX8LYacxwAkdLCPzNdepXHa";
        //                 break;
        //             case "911":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQeR8aifY3O1BDYSUqZ8PFJUSknQrAYCEKdlPo48kHnvYf62E4oqOcL3v6ZdGwJxEeqtI3UiscWwAB658elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo";
        //                 break;
        //             case "Taycan":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQetmaifRwR1BDYkgqZ8PFsUSknQrAYCEKdlPo48kHnvaNR2E41PecL3vUsdGw4SktFepzLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
        //                 break;
        //             case "Cayenne":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9ko60KkzFWTQetmaifRwN1BDPpMqZ8PdFUSknXJAYCEfulPoLQtHnvGkQ2E4ozicL3vU7dGwJxEeqtC3UiuMDwAB65belZaIPRHS1%25cV2vdftDdbySTIrdxrCBzpGQSgQ25idlv%25xEeBOdZHIKOL75Vv";
        //                 break;
        //         }
        //         break;
        //     case 2:
        //         switch (selectValue) {
        //             case "718":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3jZ60KZA5WTQSgAaifSHl1BDYkWqZ8PUUUSkKPPAYCQlKlPo4eQHnv3hA2E4wy%25cL3e9HdGwRIptFeAIKMXRG775%25VezgNjmfNXbH0KV2YsGjmcPU8Rbd3M85kMsIPBu6n0IwJ5RyoQynX8LYacxwAkdLCPzNdepXHa";
        //                 break;
        //             case "911":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQeR8aifY3O1BDYSUqZ8PFJUSknQrAYCEKdlPo48kHnvYf62E4oqOcL3v6ZdGwJ8EeqzO3UiscWwAB658elZaafRHocQdfcmNZ09Ik7NffxJLKZhKHMTcAovmnwibcBl9pbEzMRo";
        //                 break;
        //             case "Taycan":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9V7KMIOlhQ5rsRgfNULH0DyAqAT89orKikIvRdBCr4NzZou35ESv6aIrY4W0XAP3aTvUnw1WBdEeqaCrLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
        //                 break;
        //             case "Cayenne":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9V7KMjr6hQ5rsRgfNULH0DyAqXT89vMGikIvERBCr4VtZou3y7Sv6wNLY4WerNP3a6sDnw1WBJEeqtC3UiuMDwAB65belZaIPRHS1%25cV2vdftDdbySTIrdxrCBzpGQSgQ25idlv%25xEeBOdZHIKOL75Vv";
        //                 break;
        //         }
        //         break;
        //     case 3:
        //         switch (selectValue) {
        //             case "718":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3jZ60KZA5WTQSgAaifYT0DyCYST89orgikIvBBBCr5vvZouNS5Sv6aUNY4W1pZP3aq%25mnw1UjYEeqAxMLRUZx5GVAeJJFmlUsKXbHyXV2YsGjmcPU8Rbd3M85kMsIPBu6n0IwJ5RyoQynX8LYacxwAkdLCPzNdepXHa";
        //                 break;
        //             case "911":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3L7KM1oLhQ5kKpNFVEoKyXGb0Q9%25FedfIjIH0Drxw1Y8uz5lsk67ywBCWK1mqb1vH7%25cdJG4bbEeBV7FVWAj1uKQvT8x41z6cR4iLACK";
        //                 break;
        //             case "Taycan":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xV60KkzFWTQetmaifRwR1BDYkgqZ8PFsUSknQrAYCEKdlPo48kHnvaNR2E41PecL3vUsdGw4SktFepgLRU7ouGVAvQZFml4fzXbH33Y%25O205mcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
        //                 break;
        //         }
        //         break;
        //     case 4:
        //         switch (selectValue) {
        //             case "718":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3jZ60KZA5WTQSgAaifSHl1BDYkWqZ8PUUUSkKPPAYCQlKlPo4eQHnv3hA2E4wy%25cL3e9HdGwRIptFeAIKMXRG775%25VezgNjmfNXbHRcV2YsGjmcPU8Rbd3M85kMsIPBu6n0IwJ5RyoQynX8LYacxwAkdLCPzNdepXHa";
        //                 break;
        //             case "911":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3L7KM1oLhQ5XdYgfNMja0Dy5GsT898maikIfuDrxw1Y8uz5lsk67ywBCWK1mqb1vH7%25cdJG4bbEeBV7FVWAj1uKQvT8x41z6cR4iLACK";
        //                 break;
        //             case "Taycan":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8P7KMIOlhQ5rsRgfNULH0DyAqAT89orKikIvRdBCr4NzZou35ESv6aIrY4W0XAP3aTvUnw1WBdEeqaCrLRUMKwABJ67elZWNkRHSaysV2Y11omcPBMvbdnAWGOtw5kNC5JrnZ6GbhW4Ygf%258ni8t9S5cwzJFmYp5Pd6DpX09Ow";
        //                 break;
        //         }
        //         break;
        //     case 5:
        //         switch (selectValue) {
        //             case "718":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3jZ60KZA5WTQSgAaifSHl1BDYkWqZ8PUUUSkKPPAYCQlKlPo4eQHnv3hA2E4wy%25cL3e9HdGwRIptFeAIKMXRG775%25VezgNjmfNXbHzM9%25O270mcPU8Rbd3M85kMsIPBu6n0IwJ5RyoQynX8LYacxwAkdLCPzNdepXHa";
        //                 break;
        //             case "911":
        //                 exteriorImg.src = "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjau5PwI7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3L7KM1oLhQ5XdYgfNMja0Dy5GsT898maikIL3HBCrKVzZounGk67ywBCWK1mqb1vH7%25cdJG4bbEeBV7FVWAj1uKQvT8x41z6cR4iLACK";
        //                 break;
        //         }
        //         break;
        // }
    });
    
}
function clearExteriorColor() {
    for (let i = 0; i < exteriorColor.length; i++) {
        exteriorColor[i].classList.remove("active");
    }
}

//휠
let wheelsList = document.querySelectorAll(".wheels-list li");
// let previewImg = document.querySelector(".preview-area .imgBox img");
      
for (let i = 0; i < wheelsList.length; i++) {
    wheelsList[i].addEventListener("click",function() {
        clearWheelsList();
        this.classList.add("active");
        switch (i) {
            case 0:
                // previewImg.src="https://i.ibb.co/Mk3BPS2/purchase-car-color02.jpg";
                wheelsPrice = Number(800000);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 1:
                // previewImg.src="https://i.ibb.co/hH0m6gJ/purchase-car-color01.jpg";
                wheelsPrice = Number(0);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 2:
                // previewImg.src="https://i.ibb.co/3yzm57X/purchase-car-color03.jpg";
                wheelsPrice = Number(2700000);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 3:
                // previewImg.src="https://i.ibb.co/gDT9sQ4/purchase-car-color04.jpg";
                wheelsPrice = Number(2200000);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
            case 4:
                // previewImg.src="https://i.ibb.co/QFN1zyn/purchase-car-color05.jpg";
                wheelsPrice = Number(3600000);
                totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                break;
        }
    });
    
}
function clearWheelsList() {
    for (let i = 0; i < wheelsList.length; i++) {
        wheelsList[i].classList.remove("active");
    }
}


//선택옵션
let individualList = document.querySelectorAll(".individual-list li");
let individualCount = [0,0,0,0];    
    
for (let i = 0; i < individualList.length; i++) {
    individualList[i].addEventListener("click",function() {
        if (individualCount[i] == 0) {
            this.classList.add("active");
        }
        else{
            this.classList.remove("active");
        }
        switch (i) {
            case 0:
                if (individualCount[i] == 0) {     
                    individualPrice = individualPrice + Number(1650000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    individualCount[i] = 1;
                }
                else{
                    individualPrice = individualPrice - Number(1650000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    individualCount[i] = 0;
                }
                
                break;
            case 1:
                if (individualCount[i] == 0) {
                    individualPrice = individualPrice + Number(850000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    individualCount[i] = 1;
                }
                else{
                    individualPrice = individualPrice - Number(850000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    individualCount[i] = 0;
                }
                break;
            case 2:
                if (individualCount[i] == 0) {
                    individualPrice = individualPrice + Number(1100000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    individualCount[i] = 1;
                }
                else{
                    individualPrice = individualPrice - Number(1100000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    individualCount[i] = 0;
                }
                break;
            case 3:
                if (individualCount[i] == 0) {
                    individualPrice = individualPrice + Number(700000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    individualCount[i] = 1;
                }
                else{
                    individualPrice = individualPrice -  Number(700000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    individualCount[i] = 0;
                }
                break;
        }
    });
    
}

//액세서리
let convenienceList = document.querySelectorAll(".convenience-list li");
let convenienceCount = [0,0,0,0];    
    
for (let i = 0; i < convenienceList.length; i++) {
    convenienceList[i].addEventListener("click",function() {
        if (convenienceCount[i] == 0) {
            this.classList.add("active");
        }
        else{
            this.classList.remove("active");
        }
        switch (i) {
            case 0:
                if (convenienceCount[i] == 0) {     
                    individualPrice = individualPrice + Number(490000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    convenienceCount[i] = 1;
                }
                else{
                    individualPrice = individualPrice - Number(490000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    convenienceCount[i] = 0;
                }
                
                break;
            case 1:
                if (convenienceCount[i] == 0) {
                    individualPrice = individualPrice + Number(370000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    convenienceCount[i] = 1;
                }
                else{
                    individualPrice = individualPrice - Number(370000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    convenienceCount[i] = 0;
                }
                break;
            case 2:
                if (convenienceCount[i] == 0) {
                    individualPrice = individualPrice + Number(160000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    convenienceCount[i] = 1;
                }
                else{
                    individualPrice = individualPrice - Number(160000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    convenienceCount[i] = 0;
                }
                break;
            case 3:
                if (convenienceCount[i] == 0) {
                    individualPrice = individualPrice + Number(320000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    convenienceCount[i] = 1;
                }
                else{
                    individualPrice = individualPrice -  Number(320000);
                    totalPriceText.innerHTML = (totalPrice + colorPrice + wheelsPrice + individualPrice + conveniencePrice).toLocaleString('ko-KR');
                    convenienceCount[i] = 0;
                }
                break;
        }
    });
    
}

