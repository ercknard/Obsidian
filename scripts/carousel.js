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

var slideIndexhost = 0;
carouselhost();

function carouselhost() {
  var i;
  var x = document.getElementsByClassName("mySlides-host");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexhost++;
  if (slideIndexhost > x.length) {slideIndexhost = 1} 
  x[slideIndexhost-1].style.display = "block"; 
  setTimeout(carouselhost, 15000); 
}

// Next/previous controls
function plusSlideshost(n) {
  showSlidehost(slideIndexhost += n);
}

// Thumbnail image controls
function currentSlidehost(n) {
  showSlidehost(slideIndexhost = n);
}

function showSlidehost(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-host");
  if (n > slides.length) {slideIndexhost = 1}
  if (n < 1) {slideIndexhost = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexhost-1].style.display = "block";
}

var slideIndexthings = 0;
carouselthings();

function carouselthings() {
    var i;
    var x = document.getElementsByClassName("mySlides-things");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndexthings++;
    if (slideIndexthings > x.length) {slideIndexthings = 1} 
    x[slideIndexthings-1].style.display = "block"; 
    setTimeout(carouselthings, 15000); 
  }
  
  // Next/previous controls
  function plusSlidesthings(n) {
    showSlidethings(slideIndexthings += n);
  }
  
  // Thumbnail image controls
  function currentSlidethingst(n) {
    showSlidethings(slideIndexthings = n);
  }
  
  function showSlidethings(n) {
    autoScroll = false;
    var i;
    var slides = document.getElementsByClassName("mySlides-things");
    if (n > slides.length) {slideIndexthings = 1}
    if (n < 1) {slideIndexthings = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexthings-1].style.display = "block";
  }

  var slideIndexcoins = 0;
carouselcoins();

function carouselcoins() {
    var i;
    var x = document.getElementsByClassName("mySlides-coin");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
  }
  
  // Next/previous controls
  function plusSlidescoins(n) {
    showSlidecoins(slideIndexcoins += n);
  }
  
  // Thumbnail image controls
  function currentSlidecoins(n) {
    showSlidecoins(slideIndexcoins = n);
  }
  
  function showSlidecoins(n) {
    autoScroll = false;
    var i;
    var slides = document.getElementsByClassName("mySlides-coin");
    if (n > slides.length) {slideIndexcoins = 1}
    if (n < 1) {slideIndexcoins = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexcoins-1].style.display = "block";
  }

  var slideIndexservers = 0;
carouselservers();

function carouselservers() {
    var i;
    var x = document.getElementsByClassName("mySlides-server");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
  }
  
  // Next/previous controls
  function plusSlidesservers(n) {
    showSlideservers(slideIndexservers += n);
  }
  
  // Thumbnail image controls
  function currentSlideservers(n) {
    showSlideservers(slideIndexservers = n);
  }
  
  function showSlideservers(n) {
    autoScroll = false;
    var i;
    var slides = document.getElementsByClassName("mySlides-server");
    if (n > slides.length) {slideIndexservers = 1}
    if (n < 1) {slideIndexservers = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexservers-1].style.display = "block";
  }