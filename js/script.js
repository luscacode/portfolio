ScrollReveal({ reset: true });

ScrollReveal().reveal(".hidden", { duration: 2000, distance: "2rem" });

const theme = document.querySelector("#theme");
const body = document.querySelector("body");

theme.addEventListener("click", (e) => {
    theme.classList.toggle("fa-sun");
    theme.classList.toggle("fa-moon");
    body.classList.toggle("darkmode");
});
