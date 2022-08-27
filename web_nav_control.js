//game
const nav_inner_game_button = document.querySelector(".nav_web_inner_game_button");
const nav_inner_game_arrow = document.querySelector(".nav_web_inner_game_arrow");
const nav_inner_menu = document.querySelector(".nav_web_inner_all");
const nav_inner_wrap = document.querySelector(".nav_web_inner_wrap");
const game_card = document.querySelectorAll(".game_dorpdown");
const game_text = document.querySelector("#nav_ltext");
var canClick = true;

//esport
const nav_web_esport_button = document.querySelector(".nav_web_esport_button");
const nav_web_esport_arrow = document.querySelector(".nav_web_esport_arrow");
const nav_web_esport_menu = document.querySelector(".nav_web_esport_all");
const nav_web_esport_wrap = document.querySelector(".nav_web_esport_wrap");
const esport_card = document.querySelectorAll(".esport_dropdown");
const esport_text = document.querySelector(".nav_web_esport_text");

//membership
const nav_web_mem_button = document.querySelector(".nav_web_mem_button");
const nav_web_mem_arrow = document.querySelector(".nav_web_mem_arrow");
const nav_web_menu = document.querySelector(".nav_web_mem_all");
const nav_web_mem_wrap = document.querySelector(".nav_web_mem_wrap");
const mem_text = document.querySelector(".nav_web_member_text");


//game
function gameCardHide() {
    for (let i = 0; i < game_card.length; i++) {
        game_card[i].style.display = "none"
    }
}
function openInnerGameMenu() {
    nav_inner_menu.style.display = "block";
    nav_inner_game_arrow.style.transform = "rotate(180deg)";
    nav_stop_scroll.classList.add("hide_scrollbar");
    game_text.style.color = "#fff";
    esport_text.style.color = "#ffffffb3";
    mem_text.style.color = "#ffffffb3";
    game_text.classList.add("nav_web_left_text");
    
}
function closeInnerGameMenu() {
    nav_inner_menu.style.display = "none";
    nav_inner_game_arrow.style.transform = "rotate(0deg)";
    nav_stop_scroll.classList.remove("hide_scrollbar");
    game_text.style.color = "#fff";
    esport_text.style.color = "#ffffffb3";
    mem_text.style.color = "#ffffffb3";
    mem_text.style.color = "#ffffffb3";
    game_text.classList.add("nav_web_left_text");
}
function gameClick() {
    if (canClick) {
        canClick = false;
        if (nav_inner_menu.style.display === "none") {
            openInnerGameMenu();
            let count = 0;
            var game_timer = window.setInterval(() => {
                game_card[count].style.display = "flex";
                game_card[count].classList.add("animation_dropdown");
                count += 1;
                if (count >= game_card.length) {
                    window.clearInterval(game_timer);
                    canClick = true;
                }
            }, 40);
        } else {
            window.clearInterval(game_timer);
            gameCardHide();
            closeInnerGameMenu();

            canClick = true;
        }
    }
}

//esport
function esportCardHide() {
    for (let i = 0; i < esport_card.length; i++) {
        esport_card[i].style.display = "none";
    }
}
function openWebEsporteMenu() {
    nav_web_esport_menu.style.display = "block";
    nav_web_esport_arrow.style.transform = "rotate(180deg)";
    nav_stop_scroll.classList.add("hide_scrollbar");
    game_text.style.color = "#ffffffb3";
    esport_text.style.color = "#fff";
    mem_text.style.color = "#ffffffb3";
    game_text.classList.remove("nav_web_left_text");
}
function closeWebEsporteMenu() {
    nav_web_esport_menu.style.display = "none";
    nav_stop_scroll.classList.remove("hide_scrollbar");
    nav_web_esport_arrow.style.transform = "rotate(0deg)";
    game_text.style.color = "#fff";
    esport_text.style.color = "#ffffffb3";
    game_text.classList.add("nav_web_left_text");
}
function esportClick() {
    if (canClick) {
        canClick = false;
        if (nav_web_esport_menu.style.display === "none") {
            openWebEsporteMenu();

            let count = 0;
            var esport_timer = window.setInterval(() => {
                esport_card[count].style.display = "flex";
                esport_card[count].classList.add("animation_dropdown");
                count += 1;
                if (count >= esport_card.length) {
                    window.clearInterval(esport_timer);
                    canClick = true;
                }
            }, 40);
        } else {
            window.clearInterval(esport_timer);
            esportCardHide();
            closeWebEsporteMenu();
            canClick = true;
        }
    }
}

//membership
function openMemMenu() {
    nav_web_menu.style.display = "block"
    nav_stop_scroll.classList.add("hide_scrollbar");
    nav_web_mem_arrow.style.transform = "rotate(180deg)";
    game_text.style.color = "#ffffffb3";
    esport_text.style.color = "#ffffffb3";
    mem_text.style.color = "#fff"
    game_text.classList.remove("nav_web_left_text");
}
function closeMemMenu() {
    nav_web_menu.style.display = "none";
    nav_stop_scroll.classList.remove("hide_scrollbar");
    nav_web_mem_arrow.style.transform = "rotate(0deg)";
    game_text.style.color = "#fff";
    esport_text.style.color = "#ffffffb3";
    mem_text.style.color = "#ffffffb3"
    game_text.classList.add("nav_web_left_text");
}
function memClick() {
    if (nav_web_menu.style.display == "none") {
        openMemMenu();

    } else {
        closeMemMenu();
    }
}


//game
nav_inner_wrap.addEventListener("click", () => {
    window.event.cancelBubble = true;
});

nav_inner_game_arrow.style.transform = "rotate(0deg)";
nav_inner_menu.style.display = "none";
gameCardHide();

nav_inner_game_button.addEventListener("click", () => {
    if (nav_web_esport_menu.style.display == "block") {
        esportClick();
    }
    if (nav_web_menu.style.display == "block") {
        memClick();
    }
    gameClick();
});
nav_inner_menu.addEventListener("click", gameClick);

//esport
nav_web_esport_wrap.addEventListener("click", () => {
    window.event.cancelBubble = true;
})

nav_web_esport_arrow.style.transform = "rotate(0deg)";
nav_web_esport_menu.style.display = "none";
esportCardHide();

nav_web_esport_button.addEventListener("click", () => {
    if (nav_inner_menu.style.display == "block") {
        gameClick();
    }
    if (nav_web_menu.style.display == "block") {
        memClick();
    }
    esportClick();
});
nav_web_esport_menu.addEventListener("click", esportClick);

//membership
nav_web_mem_wrap.addEventListener("click", () => {
    window.event.cancelBubble = true;
});
closeMemMenu();

nav_web_mem_button.addEventListener("click", () => {
    if (nav_inner_menu.style.display == "block") {
        gameClick();
    }
    if (nav_web_esport_menu.style.display == "block") {
        esportClick();
    }
    memClick();
});
nav_web_menu.addEventListener("click", closeMemMenu);

window.addEventListener("resize", () => {
    if (nav_inner_menu.style.display == "block") {
        gameClick();
    }
    if (nav_web_esport_menu.style.display == "block") {
        esportClick();
    }
    if (nav_web_menu.style.display == "block") {
        memClick();
    }
    closeInnerGameMenu();
    closeWebEsporteMenu();
    closeMemMenu();
})