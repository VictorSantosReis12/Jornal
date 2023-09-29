let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function goToSlide(slideNumber) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (slideNumber + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}