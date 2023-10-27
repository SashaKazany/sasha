const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.remove("hidden");
        } else {
            slide.classList.add("hidden");
        }
    });

    const translateX = -currentIndex * 0; 
    slider.style.transform = `translateX(${translateX}%)`;

    if (currentIndex === slides.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }

    if (currentIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

updateSlider();
