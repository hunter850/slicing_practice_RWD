const mobile_mem_esport_button = document.querySelector(".mobile_mem_esport_button");
const esport_h = 284;
var tmp = 0;

mobile_mem_esport_button.style.height = "44px";

function mobile_esport_reset() {
    mobile_mem_esport_button.style.height = 44 + "px";
    mobile_mem_esport_button.classList.remove("membership_side_menu_decorate");
}
function esportMenuToggle() {
    window.event.cancelBubble = true;
    if (mobile_mem_esport_button.getBoundingClientRect().height <= 44) {
        tmp = 44;
        var time = window.setInterval(() => {
            tmp += 50;
            mobile_mem_esport_button.style.height = tmp + "px";
            if (mobile_mem_esport_button.getBoundingClientRect().height >= esport_h) {
                window.clearInterval(time);
                mobile_mem_esport_button.style.height = esport_h + "px";
            }
        }, 20);
        mobile_mem_esport_button.classList.add("membership_side_menu_decorate");
    } else {
        tmp = esport_h;
        var time = window.setInterval(() => {
            tmp -= 50;
            mobile_mem_esport_button.style.height = tmp + "px";
            if (mobile_mem_esport_button.getBoundingClientRect().height <= 44) {
                window.clearInterval(time);
                mobile_mem_esport_button.style.height = 44 + "px";
            }
        }, 20);
        mobile_mem_esport_button.classList.remove("membership_side_menu_decorate");
    }
}
mobile_mem_esport_button.addEventListener("click", esportMenuToggle);
mobile_mem_esport_button.addEventListener("click", () => {
    mobile_mem_button.classList.remove("membership_side_menu_decorate");
});
//mobile_mem_esport_button宣告在membership_game_toggle.js
mobile_mem_esport_button.addEventListener("click", () => {
    mobile_mem_button.style.height = 44 + "px";
});


//mem_close_icon 宣告在membership_menu_display.js
mem_close_icon.addEventListener("click", mobile_esport_reset);
mem_menu.addEventListener("click", mobile_esport_reset);
window.addEventListener("resize", mobile_esport_reset);