var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 15000); 
}

// Next/previous controls
function plusSlides(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//----------------------------------------------------------------------PYLONS-----------------------------------------------------------------//

var slideIndexpylons = 0;
carouselpylons();

function carouselpylons() {
  var i;
  var x = document.getElementsByClassName("mySlides-pylons");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexpylons++;
  if (slideIndexpylons > x.length) {slideIndexpylons = 1} 
  x[slideIndexpylons-1].style.display = "block"; 
  setTimeout(carouselpylons, 15000); 
}

// Next/previous controls
function plusSlidespylons(n) {
  showSlidepylons(slideIndexpylons += n);
}

// Thumbnail image controls
function currentSlidepylons(n) {
  showSlidepylons(slideIndexpylons = n);
}

function showSlidepylons(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-pylons");
  if (n > slides.length) {slideIndexpylons = 1}
  if (n < 1) {slideIndexpylons = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexpylons-1].style.display = "block";
}