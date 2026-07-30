let currentPage = 1;
const totalPages = 8;

function showPage(pageNumber) {
    const pages = document.querySelectorAll(".page");

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    const page = document.getElementById("page" + pageNumber);

    if (page) {
        page.classList.add("active");
        currentPage = pageNumber;
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    showPage(1);

    /* Page 2: loading ke baad automatically Page 3 */
    setTimeout(function () {
        if (currentPage === 2) {
            nextPage();
        }
    }, 4500);

    /* Music button */
    const playButton = document.getElementById("playSong");

    if (playButton) {
        playButton.addEventListener("click", function () {
            alert("Song file add karne ke baad yahan song play hoga 🎵💙");
        });
    }

});
