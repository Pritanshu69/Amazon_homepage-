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


let highlight = document.querySelectorAll('.hed');

highlight.forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = '#eee'; 
    });

    e.addEventListener('mouseout', () => {
        e.style.backgroundColor = '';
    });
});

let hamb = document.querySelector('.hamburger');
let hamburg = document.querySelector('.ham-menu');
let cros = document.querySelector('.cross');
let imp = document.querySelector('.main-body');

hamburg.addEventListener('click', ()=>{
    hamb.classList.add('removed-ham');
    imp.classList.add('removed');

})

cros.addEventListener('click', ()=>{
    hamb.classList.remove('removed-ham');
    imp.classList.remove('removed');

})