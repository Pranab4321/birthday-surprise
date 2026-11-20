
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


/* =================================
   BIRTHDAY CONFETTI EFFECT
================================= */

const confettiContainer =
    document.getElementById("confetti-container");

const confettiColors = [
    "#ff3c87",
    "#ffd1df",
    "#ffffff",
    "#e8b65c",
    "#c83275"
];

function createConfetti() {

    if (!confettiContainer) return;

    const confetti = document.createElement("span");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "%";

    confetti.style.backgroundColor =
        confettiColors[
            Math.floor(Math.random() * confettiColors.length)
        ];

    confetti.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    confetti.style.animationDelay =
        Math.random() * 4 + "s";

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 10000);

}

for (let i = 0; i < 65; i++) {
    createConfetti();
}

setInterval(createConfetti, 250);
