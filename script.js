let currentIndex = 0;

function showSlide(index) {
const slider = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;
currentIndex = (index + totalSlides) % totalSlides;

const translateValue = -currentIndex * 100;
slider.style.transform = `translateX(${translateValue}%)`;
}

function nextSlide() {
showSlide(currentIndex + 1);
}

function prevSlide() {
showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);