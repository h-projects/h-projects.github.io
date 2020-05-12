// Update The H Count
function updateHCount() {
	document.getElementById("h-count").innerText = localStorage.clickCount;
}

// USELESS USELESS USELESS USELESS USELESS USELESS USELESS USELESS USELESS USELESS USELESS USELESS USELESS USELESS 
function confirmVar() {
	return confirm("Are you sure you want to do that?");
}

// Click (relies on updateHCount)
function clicked() {
	localStorage.clickCount = parseInt(localStorage.clickCount) + 1;
	updateHCount();
}

// Remove (relies on updateHCount)
function remove() {
	localStorage.clickCount = 0;
	updateHCount();
}

// reset h count and upgrades purchased (relies on confirmVar)
function reset() {
	if(confirmVar()) {
		localStorage.removeItem("clickCount");
		localStorage.removeItem("itemsPurchased");
		window.location.reload();
	}
}

// Rebirth (relies on remove)
function rebirth() {
	if(parseInt(localStorage.clickCount) >= 200000000 && confirmVar() === true) {
		remove();
	}
}

// add event listner function for window
addEventListener("load", function() { // when the window has loaded
	// Get The H Elemnt And Run Clicked On Click
	document.getElementById("h").onclick = clicked;
	// Get The Rehirth Elemnt And Run Rebirth On Click
	document.getElementById("hehirth").onclick = rebirth;
	// Get the reset button element and run the reset function on click
	document.getElementById("reset").onclick = reset;
	
	// user has never played before (checks if the click count doesn't exist (undefined))
	if(localStorage.clickCount === undefined) {
		// set clickCount To 0
		localStorage.clickCount = 0;
		// alert no g
		window.alert("Welcome to H Clicker. To begin, click the H button, or press the H key. Do not press G.");
	}// user has played before
	 else { 
		//  update h count
		updateHCount();
	}
});

// listen for keystrokes
addEventListener("keydown", function(event) {
	// switch event
	switch(event.key) {
		// ban g
		case "g": {
				// g spy alert
				window.alert("G is very cringe and not good. Evil Aden Is Proud Of You.");
				// remove the h
				remove();
				break;
			}
		}
	}
);
