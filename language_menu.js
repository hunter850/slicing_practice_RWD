const language = document.querySelector(".footer_language");
const close_icon = document.querySelector(".language_menu_close");
const menu = document.querySelector(".language_menu")
const web_menu = document.querySelector(".web_language_menu_all");
const language_prevent_bubble = document.querySelector(".web_language_wrap");
const body_click = document.querySelector("body");
const footer = document.querySelector("footer");


function openLanguageMenu() {
    if (window.innerWidth < 480) {
        menu.style.display = "block";
        body_click.classList.add("lan_stop_scroll");
    } else if (480 <= window.innerWidth) {
        web_menu.style.display = "block";
        body_click.classList.add("dark_screen");
    }
}
function closeLanguageMenu() {
    if (window.innerWidth < 480) {
        menu.style.display = "none";
        body_click.classList.remove("lan_stop_scroll");
    } else if (480 <= window.innerWidth) {
        web_menu.style.display = "none";
        body_click.classList.remove("dark_screen");
    }
}


menu.style.display = "none";

language.addEventListener("click", (e) => {
    openLanguageMenu();
    if (480 <= window.innerWidth && window.innerWidth < 720 && window.scrollY > footer.offsetTop - 382) {
        e.preventDefault();
        window.scrollTo({ 'behavior': 'smooth', 'top': footer.offsetTop - 382});
    }
    if (720 <= window.innerWidth && window.scrollY > footer.offsetTop - 150) {
        e.preventDefault();
        window.scrollTo({ 'behavior': 'smooth', 'top': footer.offsetTop - 150});
    }
});
language.addEventListener("click", () => {
    window.event.cancelBubble = true;
});
close_icon.addEventListener("click", closeLanguageMenu);
body_click.addEventListener("click", closeLanguageMenu);

window.addEventListener("resize", () => {
    if(menu.style.display === "block" && 480 <= window.innerWidth) {
        menu.style.display = "none";
        body_click.classList.remove("lan_stop_scroll");
        web_menu.style.display = "block";
        body_click.classList.add("dark_screen");
    }
    if(web_menu.style.display === "block" && 480 >= window.innerWidth) {
        web_menu.style.display = "none";
        body_click.classList.remove("dark_screen");
        menu.style.display = "block";
        body_click.classList.add("lan_stop_scroll");
    }
})