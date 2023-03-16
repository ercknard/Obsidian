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

//----------------------------------------------------------------------FORGE-----------------------------------------------------------------//

var slideIndexforge = 0;
carouselforge();

function carouselforge() {
  var i;
  var x = document.getElementsByClassName("mySlides-forge");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexforge++;
  if (slideIndexforge > x.length) {slideIndexforge = 1} 
  x[slideIndexforge-1].style.display = "block"; 
  setTimeout(carouselforge, 15000); 
}

// Next/previous controls
function plusSlidesforge(n) {
  showSlideforge(slideIndexforge += n);
}

// Thumbnail image controls
function currentSlideforge(n) {
  showSlideforge(slideIndexforge = n);
}

function showSlideforge(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-forge");
  if (n > slides.length) {slideIndexforge = 1}
  if (n < 1) {slideIndexforge = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexforge-1].style.display = "block";
}

//----------------------------------------------------------------------FARM-----------------------------------------------------------------//

var slideIndexfarm = 0;
carouselfarm();

function carouselfarm() {
  var i;
  var x = document.getElementsByClassName("mySlides-farm");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexfarm++;
  if (slideIndexfarm > x.length) {slideIndexfarm = 1} 
  x[slideIndexfarm-1].style.display = "block"; 
  setTimeout(carouselfarm, 15000); 
}

// Next/previous controls
function plusSlidesfarm(n) {
  showSlidefarm(slideIndexfarm += n);
}

// Thumbnail image controls
function currentSlidefarm(n) {
  showSlidefarm(slideIndexfarm = n);
}

function showSlidefarm(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-farm");
  if (n > slides.length) {slideIndexfarm = 1}
  if (n < 1) {slideIndexfarm = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexfarm-1].style.display = "block";
}

//----------------------------------------------------------------------KELP-----------------------------------------------------------------//

var slideIndexkelp = 0;
carouselkelp();

function carouselkelp() {
  var i;
  var x = document.getElementsByClassName("mySlides-kelp");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexkelp++;
  if (slideIndexkelp > x.length) {slideIndexkelp = 1} 
  x[slideIndexkelp-1].style.display = "block"; 
  setTimeout(carouselkelp, 15000); 
}

// Next/previous controls
function plusSlideskelp(n) {
  showSlidekelp(slideIndexkelp += n);
}

// Thumbnail image controls
function currentSlidekelp(n) {
  showSlidekelp(slideIndexkelp = n);
}

function showSlidekelp(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-kelp");
  if (n > slides.length) {slideIndexkelp = 1}
  if (n < 1) {slideIndexkelp = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexkelp-1].style.display = "block";
}

//----------------------------------------------------------------------MOB-----------------------------------------------------------------//

var slideIndexmob = 0;
carouselmob();

function carouselmob() {
  var i;
  var x = document.getElementsByClassName("mySlides-mob");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexmob++;
  if (slideIndexmob > x.length) {slideIndexmob = 1} 
  x[slideIndexmob-1].style.display = "block"; 
  setTimeout(carouselmob, 15000); 
}

// Next/previous controls
function plusSlidesmob(n) {
  showSlidemob(slideIndexmob += n);
}

// Thumbnail image controls
function currentSlidemob(n) {
  showSlidemob(slideIndexmob = n);
}

function showSlidemob(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-mob");
  if (n > slides.length) {slideIndexmob = 1}
  if (n < 1) {slideIndexmob = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexmob-1].style.display = "block";
}

//----------------------------------------------------------------------SMOKEHOUSE-----------------------------------------------------------------//

var slideIndexsmokehouse = 0;
carouselsmokehouse();

function carouselsmokehouse() {
  var i;
  var x = document.getElementsByClassName("mySlides-smokehouse");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexsmokehouse++;
  if (slideIndexsmokehouse > x.length) {slideIndexsmokehouse = 1} 
  x[slideIndexsmokehouse-1].style.display = "block"; 
  setTimeout(carouselsmokehouse, 15000); 
}

// Next/previous controls
function plusSlidessmokehouse(n) {
  showSlidesmokehouse(slideIndexsmokehouse += n);
}

// Thumbnail image controls
function currentSlidesmokehouse(n) {
  showSlidesmokehouse(slideIndexsmokehouse = n);
}

function showSlidesmokehouse(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-smokehouse");
  if (n > slides.length) {slideIndexsmokehouse = 1}
  if (n < 1) {slideIndexsmokehouse = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexsmokehouse-1].style.display = "block";
}

//----------------------------------------------------------------------MINER-----------------------------------------------------------------//

var slideIndexminer = 0;
carouselminer();

function carouselminer() {
  var i;
  var x = document.getElementsByClassName("mySlides-miner");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexminer++;
  if (slideIndexminer > x.length) {slideIndexminer = 1} 
  x[slideIndexminer-1].style.display = "block"; 
  setTimeout(carouselminer, 15000); 
}

// Next/previous controls
function plusSlidesminer(n) {
  showSlideminer(slideIndexminer += n);
}

// Thumbnail image controls
function currentSlideminer(n) {
  showSlideminer(slideIndexminer = n);
}

function showSlideminer(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-miner");
  if (n > slides.length) {slideIndexminer = 1}
  if (n < 1) {slideIndexminer = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexminer-1].style.display = "block";
}

//----------------------------------------------------------------------MARKET-----------------------------------------------------------------//

var slideIndexmarket = 0;
carouselmarket();

function carouselmarket() {
  var i;
  var x = document.getElementsByClassName("mySlides-market");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexmarket++;
  if (slideIndexmarket > x.length) {slideIndexmarket = 1} 
  x[slideIndexmarket-1].style.display = "block"; 
  setTimeout(carouselmarket, 15000); 
}

// Next/previous controls
function plusSlidesmarket(n) {
  showSlidemarket(slideIndexmarket += n);
}

// Thumbnail image controls
function currentSlidemarket(n) {
  showSlidemarket(slideIndexmarket = n);
}

function showSlidemarket(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-market");
  if (n > slides.length) {slideIndexmarket = 1}
  if (n < 1) {slideIndexmarket = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexmarket-1].style.display = "block";
}

//----------------------------------------------------------------------WALLET-----------------------------------------------------------------//

var slideIndexwallet = 0;
carouselwallet();

function carouselwallet() {
  var i;
  var x = document.getElementsByClassName("mySlides-wallet");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexwallet++;
  if (slideIndexwallet > x.length) {slideIndexwallet = 1} 
  x[slideIndexwallet-1].style.display = "block"; 
  setTimeout(carouselwallet, 15000); 
}

// Next/previous controls
function plusSlideswallet(n) {
  showSlidewallet(slideIndexwallet += n);
}

// Thumbnail image controls
function currentSlidewallet(n) {
  showSlidewallet(slideIndexwallet = n);
}

function showSlidewallet(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-wallet");
  if (n > slides.length) {slideIndexwallet = 1}
  if (n < 1) {slideIndexwallet = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexwallet-1].style.display = "block";
}

//----------------------------------------------------------------------LIBRARY-----------------------------------------------------------------//

var slideIndexlibrary = 0;
carousellibrary();

function carousellibrary() {
  var i;
  var x = document.getElementsByClassName("mySlides-library");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexlibrary++;
  if (slideIndexlibrary > x.length) {slideIndexlibrary = 1} 
  x[slideIndexlibrary-1].style.display = "block"; 
  setTimeout(carousellibrary, 15000); 
}

// Next/previous controls
function plusSlideslibrary(n) {
  showSlidelibrary(slideIndexlibrary += n);
}

// Thumbnail image controls
function currentSlidelibrary(n) {
  showSlidelibrary(slideIndexlibrary = n);
}

function showSlidelibrary(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-library");
  if (n > slides.length) {slideIndexlibrary = 1}
  if (n < 1) {slideIndexlibrary = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexlibrary-1].style.display = "block";
}

//----------------------------------------------------------------------TOWER-----------------------------------------------------------------//

var slideIndextower = 0;
carouseltower();

function carouseltower() {
  var i;
  var x = document.getElementsByClassName("mySlides-tower");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndextower++;
  if (slideIndextower > x.length) {slideIndextower = 1} 
  x[slideIndextower-1].style.display = "block"; 
  setTimeout(carouseltower, 15000); 
}

// Next/previous controls
function plusSlidestower(n) {
  showSlidetower(slideIndextower += n);
}

// Thumbnail image controls
function currentSlidetower(n) {
  showSlidetower(slideIndextower = n);
}

function showSlidetower(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-tower");
  if (n > slides.length) {slideIndextower = 1}
  if (n < 1) {slideIndextower = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndextower-1].style.display = "block";
}

//----------------------------------------------------------------------CHUNKLOADER-----------------------------------------------------------------//

var slideIndexchunkloader = 0;
carouselchunkloader();

function carouselchunkloader() {
  var i;
  var x = document.getElementsByClassName("mySlides-chunkloader");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexchunkloader++;
  if (slideIndexchunkloader > x.length) {slideIndexchunkloader = 1} 
  x[slideIndexchunkloader-1].style.display = "block"; 
  setTimeout(carouselchunkloader, 15000); 
}

// Next/previous controls
function plusSlideschunkloader(n) {
  showSlidechunkloader(slideIndexchunkloader += n);
}

// Thumbnail image controls
function currentSlidechunkloader(n) {
  showSlidechunkloader(slideIndexchunkloader = n);
}

function showSlidechunkloader(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-chunkloader");
  if (n > slides.length) {slideIndexchunkloader = 1}
  if (n < 1) {slideIndexchunkloader = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexchunkloader-1].style.display = "block";
}

//----------------------------------------------------------------------ROSENBRIDGE-----------------------------------------------------------------//

var slideIndexrosenbridge = 0;
carouselrosenbridge();

function carouselrosenbridge() {
  var i;
  var x = document.getElementsByClassName("mySlides-rosenbridge");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexrosenbridge++;
  if (slideIndexrosenbridge > x.length) {slideIndexrosenbridge = 1} 
  x[slideIndexrosenbridge-1].style.display = "block"; 
  setTimeout(carouselrosenbridge, 15000); 
}

// Next/previous controls
function plusSlidesrosenbridge(n) {
  showSliderosenbridge(slideIndexrosenbridge += n);
}

// Thumbnail image controls
function currentSliderosenbridge(n) {
  showSliderosenbridge(slideIndexrosenbridge = n);
}

function showSliderosenbridge(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-rosenbridge");
  if (n > slides.length) {slideIndexrosenbridge = 1}
  if (n < 1) {slideIndexrosenbridge = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexrosenbridge-1].style.display = "block";
}

//----------------------------------------------------------------------DONATE-----------------------------------------------------------------//

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

  //----------------------------------------------------------------------infuser-----------------------------------------------------------------//

var slideIndexinfuser = 0;
carouselinfuser();

function carouselinfuser() {
  var i;
  var x = document.getElementsByClassName("mySlides-infuser");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexinfuser++;
  if (slideIndexinfuser > x.length) {slideIndexinfuser = 1} 
  x[slideIndexinfuser-1].style.display = "block"; 
  setTimeout(carouselinfuser, 15000); 
}

// Next/previous controls
function plusSlidesinfuser(n) {
  showSlideinfuser(slideIndexinfuser += n);
}

// Thumbnail image controls
function currentSlideinfuser(n) {
  showSlideinfuser(slideIndexinfuser = n);
}

function showSlideinfuser(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-infuser");
  if (n > slides.length) {slideIndexinfuser = 1}
  if (n < 1) {slideIndexinfuser = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexinfuser-1].style.display = "block";
}

//----------------------------------------------------------------------stabilizer-----------------------------------------------------------------//

var slideIndexstabilizer = 0;
carouselstabilizer();

function carouselstabilizer() {
  var i;
  var x = document.getElementsByClassName("mySlides-stabilizer");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexstabilizer++;
  if (slideIndexstabilizer > x.length) {slideIndexstabilizer = 1} 
  x[slideIndexstabilizer-1].style.display = "block"; 
  setTimeout(carouselstabilizer, 15000); 
}

// Next/previous controls
function plusSlidesstabilizer(n) {
  showSlidestabilizer(slideIndexstabilizer += n);
}

// Thumbnail image controls
function currentSlidestabilizer(n) {
  showSlidestabilizer(slideIndexstabilizer = n);
}

function showSlidestabilizer(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-stabilizer");
  if (n > slides.length) {slideIndexstabilizer = 1}
  if (n < 1) {slideIndexstabilizer = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexstabilizer-1].style.display = "block";
}

//----------------------------------------------------------------------enchancer-----------------------------------------------------------------//

var slideIndexenchancer = 0;
carouselenchancer();

function carouselenchancer() {
  var i;
  var x = document.getElementsByClassName("mySlides-enchancer");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexenchancer++;
  if (slideIndexenchancer > x.length) {slideIndexenchancer = 1} 
  x[slideIndexenchancer-1].style.display = "block"; 
  setTimeout(carouselenchancer, 15000); 
}

// Next/previous controls
function plusSlidesenchancer(n) {
  showSlideenchancer(slideIndexenchancer += n);
}

// Thumbnail image controls
function currentSlideenchancer(n) {
  showSlideenchancer(slideIndexenchancer = n);
}

function showSlideenchancer(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-enchancer");
  if (n > slides.length) {slideIndexenchancer = 1}
  if (n < 1) {slideIndexenchancer = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexenchancer-1].style.display = "block";
}

//----------------------------------------------------------------------features-----------------------------------------------------------------//

var slideIndexfeatures = 0;
carouselfeatures();

function carouselfeatures() {
  var i;
  var x = document.getElementsByClassName("mySlides-features");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexfeatures++;
  if (slideIndexfeatures > x.length) {slideIndexfeatures = 1} 
  x[slideIndexfeatures-1].style.display = "block"; 
  setTimeout(carouselfeatures, 15000); 
}

// Next/previous controls
function plusSlidesfeatures(n) {
  showSlidefeatures(slideIndexfeatures += n);
}

// Thumbnail image controls
function currentSlidefeatures(n) {
  showSlidefeatures(slideIndexfeatures = n);
}

function showSlidefeatures(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-features");
  if (n > slides.length) {slideIndexfeatures = 1}
  if (n < 1) {slideIndexfeatures = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexfeatures-1].style.display = "block";
}

//----------------------------------------------------------------------leads-----------------------------------------------------------------//

var slideIndexleads = 0;
carouselleads();

function carouselleads() {
  var i;
  var x = document.getElementsByClassName("mySlides-leads");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexleads++;
  if (slideIndexleads > x.length) {slideIndexleads = 1} 
  x[slideIndexleads-1].style.display = "block"; 
}

// Next/previous controls
function plusSlidesleads(n) {
  showSlideleads(slideIndexleads += n);
}

// Thumbnail image controls
function currentSlideleads(n) {
  showSlideleads(slideIndexleads = n);
}

function showSlideleads(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-leads");
  if (n > slides.length) {slideIndexleads = 1}
  if (n < 1) {slideIndexleads = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexleads-1].style.display = "block";
}

//----------------------------------------------------------------------server-----------------------------------------------------------------//

var slideIndexserver = 0;
carouselserver();

function carouselserver() {
  var i;
  var x = document.getElementsByClassName("mySlides-server");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndexserver++;
  if (slideIndexserver > x.length) {slideIndexserver = 1} 
  x[slideIndexserver-1].style.display = "block"; 
}

// Next/previous controls
function plusSlidesserver(n) {
  showSlideserver(slideIndexserver += n);
}

// Thumbnail image controls
function currentSlideserver(n) {
  showSlideserver(slideIndexserver = n);
}

function showSlideserver(n) {
  autoScroll = false;
  var i;
  var slides = document.getElementsByClassName("mySlides-server");
  if (n > slides.length) {slideIndexserver = 1}
  if (n < 1) {slideIndexserver = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexserver-1].style.display = "block";
}