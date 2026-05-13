document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");

    if (button && nav) {
        button.addEventListener("click", () => {
            nav.classList.toggle("open");

            const expanded = nav.classList.contains("open");
            button.setAttribute("aria-expanded", expanded);
        });
    }
});
