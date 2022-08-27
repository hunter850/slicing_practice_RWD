const menu_outer_list = document.querySelectorAll(".side_menu_outer_list");
const menu_inner_list = document.querySelectorAll(".side_menu_inner_list");
const menu_icon_arrow = document.querySelectorAll(".side_menu_arrow");
const menu_text_color = document.querySelectorAll(".side_menu_text_color ");

function menuReset() {
    for (let i = 0; i < menu_outer_list.length; i++) {
        menu_inner_list[i].style.display = "none";
        menu_icon_arrow[i].style.transform = "rotate(0deg)";
        menu_text_color[i].style.color = "#fff";
    }
}

for (let i = 0; i < menu_outer_list.length; i++) {
    menu_inner_list[i].style.display = "none";
    menu_icon_arrow[i].style.transform = "rotate(0deg)";
}

for (let i = 0; i < menu_outer_list.length; i++) {
    menu_outer_list[i].addEventListener("click", () => {
        window.event.cancelBubble = true;
        if (menu_inner_list[i].style.display === "none") {
            for (let j = 0; j < menu_outer_list.length; j++) {
                menu_inner_list[j].style.display = "none";
            }
            menu_inner_list[i].style.display = "block";
        } else {
            menu_inner_list[i].style.display = "none";
        }
        for (let k = 0; k < menu_outer_list.length; k++) {
            if (menu_inner_list[k].style.display === "block") {
                menu_icon_arrow[k].style.transform = "rotate(-180deg)"
            } else {
                menu_icon_arrow[k].style.transform = "rotate(0deg)"
            }
        }
        for (let k = 0; k < menu_outer_list.length; k++) {
            if (menu_inner_list[k].style.display === "block") {
                menu_text_color[k].style.color = "#f06414";
            } else {
                menu_text_color[k].style.color = "#fff";
            }
        }
    });
}

//nav_close_icon宣告在nav_menu_display.js裡面
nav_close_icon.addEventListener("click", menuReset);
nav_menu.addEventListener("click", menuReset);
window.addEventListener("resize", menuReset);