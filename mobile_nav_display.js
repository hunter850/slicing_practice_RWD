const nav_menu_button = document.querySelector(".nav_menu");
const nav_close_icon = document.querySelector(".close_side_menu");
const nav_menu = document.querySelector(".nav_side_menu_bg");
const nav_stop_scroll = document.querySelector("body");

function openNavMenu() {
    nav_menu.style.transform = "translateX(0%)";
    nav_stop_scroll.classList.add("mobile_stop_scroll");
    nav_menu.style.backgroundColor = "#00000088";
}
function closeNavMenu() {
    nav_menu.style.transform = "translateX(-100%)";
    nav_stop_scroll.classList.remove("mobile_stop_scroll");
    nav_menu.style.backgroundColor = "#00000000";
}

nav_menu_button.addEventListener("click", openNavMenu);
nav_close_icon.addEventListener("click", closeNavMenu);
nav_menu.addEventListener("click", closeNavMenu);
window.addEventListener("resize", closeNavMenu);