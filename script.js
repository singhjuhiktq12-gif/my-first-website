/* =========================
   BIRTHDAY STORY BOOK
   SCRIPT.JS
========================= */

let currentPage = 1;
const totalPages = 8;

const pages = document.querySelectorAll(".page");


/* =========================
   PAGE NAVIGATION
========================= */

function nextPage() {

    if (currentPage >= totalPages) {
        return;
    }

    const current = document.getElementById(`page${currentPage}`);
    const next = document.getElementById(`page${currentPage + 1}`);

    if (!current || !next) {
        return;
    }

    current.classList.remove("active");

    currentPage++;

    next.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    handlePage(currentPage);
}


/* =========================
   PAGE-SPECIFIC ACTIONS
========================= */

function handlePage(pageNumber) {

    /* PAGE 2 → automatically move to PAGE 3 */

    if (pageNumber === 2) {

        setTimeout(() => {

            if (currentPage === 2) {
                nextPage();
            }

        }, 4500);
    }


    /* PAGE 3 → birthday animation */

    if (pageNumber === 3) {
        startBirthdayAnimation();
    }


    /* PAGE 4 → chat messages */

    if (pageNumber === 4) {
        startChatAnimation();
    }


    /* PAGE 8 → final animation */

    if (pageNumber === 8) {
        startFinalAnimation();
    }
}


/* =========================
   PAGE 3
   BIRTHDAY ANIMATION
========================= */

function startBirthdayAnimation() {

    const page = document.getElementById("page3");

    if (!page) return;

    const balloons = page.querySelector(".balloons");
    const cake = page.querySelector(".cake");
    const confetti = page.querySelector(".confetti");

    if (balloons) {
        balloons.style.animation = "none";

        setTimeout(() => {
            balloons.style.animation =
                "balloonsFloat 3s ease-in-out infinite";
        }, 50);
    }

    if (cake) {
        cake.style.animation = "none";

        setTimeout(() => {
            cake.style.animation = "cakePop 1.2s ease";
        }, 100);
    }

    if (confetti) {
        confetti.style.animation = "none";

        setTimeout(() => {
            confetti.style.animation =
                "confettiMove 2s ease-in-out infinite";
        }, 100);
    }
}


/* =========================
   PAGE 4
   CHAT MESSAGE ANIMATION
========================= */

function startChatAnimation() {

    const messages =
        document.querySelectorAll("#page4 .chat-message");

    messages.forEach((message, index) => {

        message.style.opacity = "0";
        message.style.transform = "translateY(12px)";

        setTimeout(() => {

            message.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            message.style.opacity = "1";
            message.style.transform = "translateY(0)";

        }, index * 2000);
    });
}


/* =========================
   PAGE 5
   MUSIC PLAYER
========================= */

const playButton =
    document.getElementById("playSong");

let birthdaySong = null;


/*
   IMPORTANT:

   Later, put your music file inside:

   assets/music/song.mp3

   Then uncomment the following line:

   birthdaySong = new Audio("assets/music/song.mp3");

   The Play button will then play the song.
*/


if (playButton) {

    playButton.addEventListener("click", () => {

        if (!birthdaySong) {

            playButton.textContent = "🎵 Add Song";

            return;
        }

        if (birthdaySong.paused) {

            birthdaySong.play();

            playButton.textContent = "⏸ Pause";

        } else {

            birthdaySong.pause();

            playButton.textContent = "▶ Play";
        }

    });
}


/* =========================
   PAGE 8
   FINAL ANIMATION
========================= */

function startFinalAnimation() {

    createFloatingHearts();

    const finalPage =
        document.getElementById("page8");

    if (!finalPage) return;

    finalPage.scrollTop = 0;
}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHearts() {

    const container =
        document.querySelector(".final-background");

    if (!container) return;

    const hearts = [
        "💗",
        "💙",
        "💕",
        "💖",
        "✨",
        "🌷"
    ];

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("span");

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "absolute";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "-40px";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        heart.style.opacity = "0";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "2";

        const duration =
            4 + Math.random() * 4;

        heart.style.transition =
            `bottom ${duration}s linear, opacity 1s ease`;

        container.appendChild(heart);

        setTimeout(() => {

            heart.style.bottom =
                (80 + Math.random() * 20) + "%";

            heart.style.opacity = "0.9";

        }, 100 + i * 120);

        setTimeout(() => {

            heart.remove();

        }, (duration + 1) * 1000);
    }
}


/* =========================
   START PAGE 1
========================= */

document.addEventListener("DOMContentLoaded", () => {

    currentPage = 1;

    const firstPage =
        document.getElementById("page1");

    if (firstPage) {
        firstPage.classList.add("active");
    }

});
