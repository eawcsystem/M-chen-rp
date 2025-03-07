const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
});

// Initialize the first slide as active
slides[currentSlide].classList.add('active');

const videoSlides = document.querySelectorAll('.video-slider iframe');
let currentVideoSlide = 0;

document.querySelector('.video-slider .next').addEventListener('click', () => {
    videoSlides[currentVideoSlide].classList.remove('active');
    currentVideoSlide = (currentVideoSlide + 1) % videoSlides.length;
    videoSlides[currentVideoSlide].classList.add('active');
});

document.querySelector('.video-slider .prev').addEventListener('click', () => {
    videoSlides[currentVideoSlide].classList.remove('active');
    currentVideoSlide = (currentVideoSlide - 1 + videoSlides.length) % videoSlides.length;
    videoSlides[currentVideoSlide].classList.add('active');
});

// Initialize the first video slide as active
videoSlides[currentVideoSlide].classList.add('active');
