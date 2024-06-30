let tabs = document.querySelectorAll(".tabs>div");
let contents = document.querySelectorAll(".join_us>div>div:not(:first-child)");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click",() => {
        clearJoinTab();
        clearJoinContent();
        tabs[i].classList.add("active");
        contents[i].classList.add("active");
    });
}
function clearJoinTab() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");   
    }
}
function clearJoinContent() {
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");   
    }
}