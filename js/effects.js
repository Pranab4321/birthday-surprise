
const heartContainer = document.getElementById("heart-container");

const heartSymbols = ["♥", "♡", "❤"];

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart-particle");

    heart.innerHTML =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";


    heart.style.fontSize =
        Math.random() * 35 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 8 + 8 + "s";


    heart.style.animationDelay =
        Math.random() * 3 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 18000);
}

// Generate floating hearts

for (let i = 0; i < 25; i++) {
    createHeart();
}

setInterval(createHeart, 700);
