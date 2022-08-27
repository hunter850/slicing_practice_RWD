const mobile_mem_button = document.querySelector(".mobile_mem_button");
const game_h = 724;
var temp = 0;

mobile_mem_button.style.height = "44px"


function mobile_game_reset() {
    mobile_mem_button.style.height = 44 + "px";
    mobile_mem_button.classList.remove("membership_side_menu_decorate");
}
function gameMenuToggle() {
    window.event.cancelBubble = true;
    if (mobile_mem_button.getBoundingClientRect().height <= 44) {
        temp = 44;
        var timer = window.setInterval(() => {
            temp += 100;
            mobile_mem_button.style.height = temp + "px";
            if (mobile_mem_button.getBoundingClientRect().height >= game_h) {
                window.clearInterval(timer);
                mobile_mem_button.style.height = game_h + "px";
            }
        }, 20);
        mobile_mem_button.classList.add("membership_side_menu_decorate");
    } else {
        temp = game_h;
        var timer = window.setInterval(() => {
            temp -= 100;
            mobile_mem_button.style.height = temp + "px";
            if (mobile_mem_button.getBoundingClientRect().height <= 44) {
                window.clearInterval(timer);
                mobile_mem_button.style.height = 44 + "px";
            }
        }, 20);
        mobile_mem_button.classList.remove("membership_side_menu_decorate");
    }
}
////mobile_mem_button宣告在membership_game_toggle.js
mobile_mem_button.addEventListener("click", gameMenuToggle);

mobile_mem_button.addEventListener("click", () => {
    mobile_mem_esport_button.classList.remove("membership_side_menu_decorate");
});
mobile_mem_button.addEventListener("click", () => {
    mobile_mem_esport_button.style.height = 44 + "px";
});


//mem_close_icon 宣告在membership_menu_display.js
mem_close_icon.addEventListener("click", mobile_game_reset);
mem_menu.addEventListener("click", mobile_game_reset);
window.addEventListener("resize", mobile_game_reset);