// Welcome Message
window.onload = function () {
    console.log("Welcome to BLOMPTECH DIGITALS About Page!");
};

// Toggle More Info
function toggleInfo() {
    const info = document.getElementById("moreInfo");

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.classList.add("show");
        }
    });
});