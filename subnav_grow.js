const grow = document.querySelector(".subnav_bg_grow");


if (window.innerWidth < 1600) {
    grow.style.width = "calc(100% - 42px)"
} else if (1600 <= window.innerWidth) {
    grow.style.width = "calc(1600px - 42px)"
}


window.addEventListener("resize", () => {
    if (80 <= window.scrollY) {
        grow.style.width = "100%";
    }
    else if (window.innerWidth < 1600) {
        grow.style.width = "calc(100% - 42px)"
    } else if (1600 <= window.innerWidth) {
        grow.style.width = "calc(1600px - 42px)"
    }
})


window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
        grow.style.width = "100%";
        grow.style.borderRadius = "0px";
    } else if (window.scrollY < 80 && window.innerWidth < 1600) {
        grow.style.width = "calc(100% - 42px)";
        grow.style.borderRadius = "2px";
    } else if (window.scrollY < 80 && 1600 <= window.innerWidth) {
        grow.style.width = "calc(1600px - 42px)";
        grow.style.borderRadius = "2px";
    }
});