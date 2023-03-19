const fadeOuts = () => {
    const loaderWrapper = document.querySelector('.wrapper');
    loaderWrapper.classList.add('fades');
  }
  
  window.addEventListener('load',fadeOuts);


var loader = document.getElementById("loader");

// Function to show the loader
function showLoader() {
  loader.style.display = "block";
}

// Function to hide the loader
function hideLoader() {
  loader.style.display = "none";
}

// Function to load some content
function fadeOut() {
  // Show the loader
  showLoader();

  // Simulate a delay to load some content
    // Hide the loader
    hideLoader();
}