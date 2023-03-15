function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    if (tabName === "Wiki") getWikiPage("Home");
    document.getElementById(tabName).style.display = "block";
  }


// Get the container element
var btnContainer = document.getElementById("home-active-btn");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-buttons");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

var btnContainercoin = document.getElementById("coin-active-btn");

// Get all buttons with class="btn" inside the container
var btnscoin = btnContainercoin.getElementsByClassName("coin-buttons");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btnscoin.length; i++) {
  btnscoin[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-coin");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active-coin", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active-coin";
  });
}


var btnContainerleads = document.getElementById("leads-active-btn");

// Get all buttons with class="btn" inside the container
var btnsleads = btnContainerleads.getElementsByClassName("leads-buttons");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btnsleads.length; i++) {
btnsleads[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-leads");

  // If there's no active class
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active-leads", "");
  }

  // Add the active class to the current/clicked button
  this.className += " active-leads";
});
}