var currentOption = 1;
		function toggleOptions() {

			document.getElementById("option" + currentOption).style.display = "none";

			currentOption++;

			if (currentOption > 5) {
				currentOption = 1;
			}

			document.getElementById("option" + currentOption).style.display = "block";
		}