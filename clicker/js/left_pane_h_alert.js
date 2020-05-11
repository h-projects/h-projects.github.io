// this whole file is trash
const congrats = ["You Are A Real Rascal", "Never Gonna Give You Up", "You Have Wasted Time", "You Bastened The Game Turkey", "ahhh, h!"];
const random = congrats[Math.floor(Math.random() * congrats.length)];

if(parseInt(localStorage.clickCount) === 1024) {
	window.alert(random)
}

if(parseInt(localStorage.clickCount) === 10000) {
	window.alert(random)
}