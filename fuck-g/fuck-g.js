function get(id) {
	return document.getElementById(id);
}

get("g-to-q").onclick = function() {
	get("output").value = get("input").value.split("g").join("q").split("G").join("Q");
}

get("g-to-soft-aytch").onclick = function() {
	get("output").value = get("input").value.split("g").join("ĥ").split("G").join("Ĥ");
}


get("to-h").onclick = function() {
	get("output").value = get("input").value.split("g").join("h").split("G").join("H");
}


get("copy").onclick = function () {
	/* Select the text field */
	get("output").select();
	get("output").setSelectionRange(0, 99999); /*For mobile devices*/
  
	/* Copy the text inside the text field */
	document.execCommand("copy");
}

