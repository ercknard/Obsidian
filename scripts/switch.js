var currentOption = 1;
		function toggleOptions() {
			// hide the current option
			document.getElementById("option" + currentOption).style.display = "none";
			// increment the option number
			currentOption++;
			// if we've gone past the last option, reset to the first one
			if (currentOption > 5) {
				currentOption = 1;
			}
			// show the new option
			document.getElementById("option" + currentOption).style.display = "block";
		}