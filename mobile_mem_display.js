const mem_menu_button = document.querySelector(".nav_membership");
const mem_close_icon = document.querySelector(".membership_side_menu_close");
const mem_menu_bord = document.querySelector(".membership_side_menu");
const mem_menu = document.querySelector(".membership_side_menu_bg");
const mem_stop_scroll = document.querySelector("body");

function openMemMenu() {
    mem_menu.style.transform = "translateX(0%)";
    mem_stop_scroll.classList.add("mobile_stop_scroll");
    mem_menu.style.backgroundColor = "#00000088";
}
function closeMemMenu() {
    mem_menu.style.transform = "translateX(100%)";
    mem_stop_scroll.classList.remove("mobile_stop_scroll");
    mem_menu.style.backgroundColor = "#00000000";
}

mem_menu_button.addEventListener("click", openMemMenu);
mem_close_icon.addEventListener("click", closeMemMenu);
mem_menu_bord.addEventListener("click", (event) => {
    event.cancelBubble = true;
});
mem_menu.addEventListener("click", closeMemMenu);
window.addEventListener("resize", closeMemMenu);