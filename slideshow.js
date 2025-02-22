let slideIndex = 1;
let autoSlideInterval;
let idleTimer;
const idleTime = 2500;
const totalSlides = 3;
const slideNumberElement = document.getElementById("slide-number")

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  stopAutoSlide();
  resetIdleTimer();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  stopAutoSlide();
  resetIdleTimer();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}


function startAutoSlide(){
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);

    }, 3000)
}


function stopAutoSlide(){
    clearInterval(autoSlideInterval)
}

function resetIdleTimer(){
    clearTimeout(idleTimer)
    idleTimer = setTimeout(startAutoSlide, idleTime)
}

resetIdleTimer();


function currentSlide(slideIndex){
  slideNumberElement.textContent = '${slideIndex}/${totalSlides}';
}

currentSlide(1);