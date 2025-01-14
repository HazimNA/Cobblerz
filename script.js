const slides = document.querySelector('.slides');
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlidePosition();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSlidePosition();
}