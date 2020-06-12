function get(id) {
  return document.getElementById(id);
}

get("text-to-binary").onclick = function () {
  let parseInput = get("input").value;
  
  if(parseInput === 'G') {
	localStorage.setItem("lockOut", true);
	window.location.reload();
  }

  parseInput = parseInput.split("");
  parseInput = parseInput.map((n) => n.charCodeAt(0));
  parseInput = parseInput.map((n) => n.toString(2)); // Number.prototype.toString() accepts a "base" argument, or what base to convert the number to.
  parseInput = parseInput.map((n) => n.split(""));

  parseInput = parseInput.map(function (n) {
    while (n.length < 8) {
      n.unshift("0");
    }
    return n;
  });

  parseInput = parseInput.map((n) =>
    n.map(function (a) {
      return ["h", "H"][parseInt(a)];
    })
  );

  parseInput = parseInput.map((n) => n.join(""));
  parseInput = parseInput.join(" ");
  get("output").value = parseInput;
  
};

get("binary-to-text").onclick = function () {
  let parseInput = get("input").value;

  if(parseInput === 'G') {
	localStorage.setItem("lockOut", true);
	window.location.reload();
  }

  parseInput = parseInput.split(" ");
  parseInput = parseInput.map((n) => n.split(""));

  parseInput = parseInput.map((n) =>
    n.map(function (a) {
      return ["h", "H"].indexOf(a);
    })
  );

  parseInput = parseInput.map((n) => n.join(""));
  parseInput = parseInput.map((n) => parseInt(n, 2)); // parseInt(n, b) parses the integer (n) as if it were in base (b)
  parseInput = parseInput.map((n) => String.fromCharCode(n));
  parseInput = parseInput.join("");
  get("output").value = parseInput;
};
