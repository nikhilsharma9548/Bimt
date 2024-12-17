let currentIndex = 0;
function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;


  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);



//second slider-----------------------------

let counter = 0;
function showSlideTwo(index){
  const slidesTwo = document.querySelector('.slidesTwo');
  const totalSlidesTwo = document.querySelectorAll('.slideTwo').length;

  if (index >= totalSlidesTwo) {
    counter = 0;
  } else if (index < 0) {
    counter = totalSlidesTwo - 1;
  } else {
    counter = index;
  }
  slidesTwo.style.transform = `translateX(-${counter * 105}%)`;
}
function prevSlideTwo(){
  showSlideTwo(counter + 1);
}

function nextSlideTwo(){
  showSlideTwo(counter - 1);
}


