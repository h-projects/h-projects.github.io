console.log("This feature is for developers only. If someone told you to paste something in here to activate a \"hack\", they are a g spy.");

 /*function Continue() {
	 return;
 } */ 
 
if(localStorage.getItem("lockOut") === true) {
	window.location.replace("https://h-projects.github.io/no-g")
} /* else {
	Continue();	
} */