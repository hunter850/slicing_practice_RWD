const subnav_li = document.querySelectorAll(".subnav_li");
const subnav_arrow = document.querySelectorAll(".subnav_arrow");
const subnav_ul = document.querySelectorAll(".subnav_ul");
const subnav_prevent_bubble = document.querySelectorAll(".subnav_ul li");
const body_button = document.querySelector("body");
const subnav_text = document.querySelectorAll(".subnav_text");

for (let i = 0; i < subnav_ul.length; i++) {
    subnav_ul[i].style.display = "none";
    subnav_arrow[i].style.transform = "rotate(0deg)";
}

for (let i = 0; i < subnav_li.length; i++) {
    subnav_li[i].addEventListener("click", () => {
        window.event.cancelBubble = true;
        if (subnav_ul[i].style.display == "none") {
            for (let j = 0; j < subnav_li.length; j++) {
                subnav_ul[j].style.display = "none"; //ul顯示
                subnav_li[j].style.backgroundColor = "#f2f1ed"; //li被景色
                subnav_li[j].classList.add("subnav_decorate"); //li右邊格線裝飾
                subnav_li[j].classList.add("subnav_under_decorate"); //li橘色底線
                subnav_text[j].style.color = "#4b535d"; //li文字顏色
                subnav_arrow[j].style.transform = "rotate(0deg)";
            }
            subnav_ul[i].style.display = "block";
            subnav_li[i].style.backgroundColor = "#353c42";
            subnav_li[i].classList.remove("subnav_decorate");
            subnav_li[i].classList.remove("subnav_under_decorate");
            subnav_text[i].style.color = "#f06414";
            subnav_arrow[i].style.transform = "rotate(-180deg)";
        } else {
            subnav_ul[i].style.display = "none";
            subnav_li[i].style.backgroundColor = "#f2f1ed";
            subnav_li[i].classList.add("subnav_decorate");
            subnav_li[i].classList.add("subnav_under_decorate");
            subnav_text[i].style.color = "#4b535d";
            subnav_arrow[i].style.transform = "rotate(0deg)";
        }
    });
}

for (let i = 0; i < subnav_prevent_bubble.length; i++) {
    subnav_prevent_bubble[i].addEventListener("click", () => {
        window.event.cancelBubble = true;
    });
}

body_button.addEventListener("click", () => {
    for (let i = 0; i < subnav_li.length; i++) {
        subnav_ul[i].style.display = "none";
        subnav_li[i].style.backgroundColor = "#f2f1ed";
        subnav_li[i].classList.add("subnav_decorate");
        subnav_li[i].classList.add("subnav_under_decorate");
        subnav_text[i].style.color = "#4b535d";
        subnav_arrow[i].style.transform = "rotate(0deg)";
    }
})