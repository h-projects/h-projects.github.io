function qet(id) {
	return document.getElementById(id);
}

qet("to-q").onclick = function() {
	qet("output").value = qet("input").value.split("g").join("q").split("G").join("Q");
}

qet("to-soft-h").onclick = function() {
	qet("output").value = qet("input").value.split("g").join("ĥ").split("G").join("Ĥ");
}


qet("to-hard-h").onclick = function() {
	qet("output").value = qet("input").value.split("g").join("h").split("G").join("H");
}


qet("copy").onclick = function () {
	/* Select the text field */
	qet("output").select();
	qet("output").setSelectionRange(0, 99999); /*For mobile devices*/
  
	/* Copy the text inside the text field */
	document.execCommand("copy");
}
/* const select = qet("selector");
qet("input").oninput= function() {
    if(select.value = "to-q") {
        qet("output").value = qet("input").value.split("g").join("q").split("G").join("Q");
    }
    else if(select.value = "to-soft-h") {
        qet("output").value = qet("input").value.split("g").join("ĥ").split("G").join("Ĥ");
    }
    else if(select.value = "to-hard-h") {
        qet("output").value = qet("input").value.split("g").join("h").split("G").join("H");
    }
}

qet("select").onselect = function() {
    qet("input").oninput= function() {
        if(select.value = "to-q") {
            qet("output").value = qet("input").value.split("g").join("q").split("G").join("Q");
        }
        else if(select.value = "to-soft-h") {
            qet("output").value = qet("input").value.split("g").join("ĥ").split("G").join("Ĥ");
        }
        else if(select.value = "to-hard-h") {
            qet("output").value = qet("input").value.split("g").join("h").split("G").join("H");
        }
    }
} */
