function get(id) {
	return document.getElementById(id);
}

get("g-to-q").onclick = function() {
	get("output").value = get("input").value.split("g").join("q").split("G").join("Q");
}

get("q-to-g").onclick = function() {
	get("output").value = get("input").value.split("q").join("g").split("Q").join("G");
}

get("copy").onclick = function () {
	/* Select the text field */
	get("output").select();
	get("output").setSelectionRange(0, 99999); /*For mobile devices*/
  
	/* Copy the text inside the text field */
	document.execCommand("copy");
}