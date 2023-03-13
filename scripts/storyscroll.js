var slideIndexstory = 0;
carouselstory();

function carouselstory() {
  var i;
  var x = document.getElementsByClassName("mySlides-story");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexstory++;
  if (slideIndexstory > x.length) {slideIndexstory = 1} 
  x[slideIndexstory-1].style.display = "block"; 
}

// Next/previous controls
function plusSlidesstory(n) {
  showSlidestory(slideIndexstory += n);
}

// Thumbnail image controls
function currentSlidestory(n) {
  showSlidestory(slideIndexstory = n);
}

function showSlidestory(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-story");
  if (n > slides.length) {slideIndexstory = 1}
  if (n < 1) {slideIndexstory = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexstory-1].style.display = "block";
}