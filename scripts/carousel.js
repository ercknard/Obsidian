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

//----------------------------------------------------------------------COE-----------------------------------------------------------------//

var slideIndexcoe = 0;
carouselcoe();

function carouselcoe() {
  var i;
  var x = document.getElementsByClassName("mySlides-coe");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexcoe++;
  if (slideIndexcoe > x.length) {slideIndexcoe = 1} 
  x[slideIndexcoe-1].style.display = "block"; 
  setTimeout(carouselcoe, 15000); 
}

// Next/previous controls
function plusSlidescoe(n) {
  showSlidecoe(slideIndexcoe += n);
}

// Thumbnail image controls
function currentSlidecoe(n) {
  showSlidecoe(slideIndexcoe = n);
}

function showSlidecoe(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-coe");
  if (n > slides.length) {slideIndexcoe = 1}
  if (n < 1) {slideIndexcoe = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexcoe-1].style.display = "block";
}

//----------------------------------------------------------------------CRAFTER-----------------------------------------------------------------//

var slideIndexcrafter = 0;
carouselcrafter();

function carouselcrafter() {
  var i;
  var x = document.getElementsByClassName("mySlides-crafter");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexcrafter++;
  if (slideIndexcrafter > x.length) {slideIndexcrafter = 1} 
  x[slideIndexcrafter-1].style.display = "block"; 
  setTimeout(carouselcrafter, 15000); 
}

// Next/previous controls
function plusSlidescrafter(n) {
  showSlidecrafter(slideIndexcrafter += n);
}

// Thumbnail image controls
function currentSlidecrafter(n) {
  showSlidecrafter(slideIndexcrafter = n);
}

function showSlidecrafter(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-crafter");
  if (n > slides.length) {slideIndexcrafter = 1}
  if (n < 1) {slideIndexcrafter = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexcrafter-1].style.display = "block";
}

//----------------------------------------------------------------------MACERATOR-----------------------------------------------------------------//

var slideIndexmacerator = 0;
carouselmacerator();

function carouselmacerator() {
  var i;
  var x = document.getElementsByClassName("mySlides-macerator");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexmacerator++;
  if (slideIndexmacerator > x.length) {slideIndexmacerator = 1} 
  x[slideIndexmacerator-1].style.display = "block"; 
  setTimeout(carouselmacerator, 15000); 
}

// Next/previous controls
function plusSlidesmacerator(n) {
  showSlidemacerator(slideIndexmacerator += n);
}

// Thumbnail image controls
function currentSlidemacerator(n) {
  showSlidemacerator(slideIndexmacerator = n);
}

function showSlidemacerator(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-macerator");
  if (n > slides.length) {slideIndexmacerator = 1}
  if (n < 1) {slideIndexmacerator = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexmacerator-1].style.display = "block";
}

//----------------------------------------------------------------------COMPRESSOR-----------------------------------------------------------------//

var slideIndexcompressor = 0;
carouselcompressor();

function carouselcompressor() {
  var i;
  var x = document.getElementsByClassName("mySlides-compressor");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexcompressor++;
  if (slideIndexcompressor > x.length) {slideIndexcompressor = 1} 
  x[slideIndexcompressor-1].style.display = "block"; 
  setTimeout(carouselcompressor, 15000); 
}

// Next/previous controls
function plusSlidescompressor(n) {
  showSlidecompressor(slideIndexcompressor += n);
}

// Thumbnail image controls
function currentSlidecompressor(n) {
  showSlidecompressor(slideIndexcompressor = n);
}

function showSlidecompressor(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-compressor");
  if (n > slides.length) {slideIndexcompressor = 1}
  if (n < 1) {slideIndexcompressor = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexcompressor-1].style.display = "block";
}

//----------------------------------------------------------------------SMELTERY-----------------------------------------------------------------//

var slideIndexsmeltery = 0;
carouselsmeltery();

function carouselsmeltery() {
  var i;
  var x = document.getElementsByClassName("mySlides-smeltery");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexsmeltery++;
  if (slideIndexsmeltery > x.length) {slideIndexsmeltery = 1} 
  x[slideIndexsmeltery-1].style.display = "block"; 
  setTimeout(carouselsmeltery, 15000); 
}

// Next/previous controls
function plusSlidessmeltery(n) {
  showSlidesmeltery(slideIndexsmeltery += n);
}

// Thumbnail image controls
function currentSlidesmeltery(n) {
  showSlidesmeltery(slideIndexsmeltery = n);
}

function showSlidesmeltery(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-smeltery");
  if (n > slides.length) {slideIndexsmeltery = 1}
  if (n < 1) {slideIndexsmeltery = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexsmeltery-1].style.display = "block";
}