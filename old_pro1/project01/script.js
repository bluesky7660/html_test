function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/


          //header js
          let navBlackBg = document.querySelector(".nav-black-bg");
          let blackBg = document.querySelector(".black-bg");
          let bodyArea = document.querySelector("body");

          //search
          let searchBtn = document.querySelector(".search-btn");
          let searchCloseBtn = document.querySelector(".search-close-btn");
          let searchArea = document.querySelector(".searchArea");
          let searchBox = document.querySelector(".searchBox");

          searchBtn.addEventListener("click",function() {
              searchArea.style.maxHeight = "196px";
              searchArea.style.padding = "20px";
              searchBox.style.maxHeight = "196px";
              searchBox.style.padding = "50px 0";
              blackBg.style.maxHeight = "9999px";
              searchCloseBtn.style.opacity = "1";
              searchCloseBtn.style.visibility = "visible";
          });
          searchCloseBtn.addEventListener("click",function() {
              searchArea.style.maxHeight = "0";
              searchArea.style.padding = "0 20px";
              searchBox.style.maxHeight = "0";
              searchBox.style.padding = "0";
              blackBg.style.maxHeight = "0";
              searchCloseBtn.style.opacity = "0";
              searchCloseBtn.style.visibility = "hidden";
          });
          //search 다른곳 클릭시 초기화
          document.addEventListener("click", function (e) {
              
              if (searchArea.style.maxHeight=="196px") {
                  const targetElement = e.target;
                  const isSelect = targetElement.classList.contains("searchArea") || targetElement.closest(".searchArea") || targetElement.classList.contains("search-close-btn") || targetElement.closest(".search-btn") ;
                  if (isSelect) {
                      return;
                  }
                  searchArea.style.maxHeight = "0";
                  searchArea.style.padding = "0 20px";
                  searchBox.style.maxHeight = "0";
                  searchBox.style.padding = "0";
                  blackBg.style.maxHeight = "0";
                  searchCloseBtn.style.opacity = "0";
                  if(e.target.closest(".header-pc ul li")){
                      blackBg.style.maxHeight = "9999px";
                      
                  }
              }
          });

          //nav 버튼
          let navBtn = document.querySelector(".navBtn");
          let navCloseBtn = document.querySelector(".nav-close-btn");
          let navBox = document.querySelector(".navBox");
          
          let navCount = 0;
          navBtn.addEventListener("click",function(){

              if (navCount == 0) {
                  navBtn.classList.add("active");
                  navBox.style.right = "0";
                  // navBox.style.boxShadow = "rgba(0, 0, 0, 0.7) 0px 0px 0px 9999px";
                  navBlackBg.style.maxHeight = "9999px";
                  navBlackBg.style.zIndex = "11";
                  navCount++;
                  bodyArea.style.overflowY = "hidden";
              }
              else{
                  navBtn.classList.remove("active");
                  navBox.style.right = "-100%";
                  navBlackBg.style.maxHeight = "0";
                  navBlackBg.style.zIndex = "9";
                  bodyArea.style.overflowY = "visible";
                  navCount = 0;
              }
          });
          navCloseBtn.addEventListener("click",function(){
              navBtn.classList.remove("active");
              navBox.style.right = "-100%";
              // navBox.style.boxShadow = "rgba(0, 0, 0, 0) 0px 0px 0px 9999px";
              bodyArea.style.overflowY = "visible";
              navBlackBg.style.maxHeight = "0";
              navBlackBg.style.zIndex = "9";
              navCount = 0;
          });
          
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
//로딩후
window.onload = function() {

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
}

