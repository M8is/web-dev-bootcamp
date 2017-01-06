var bg_one = "white";
var bg_two = "black";

document.querySelector("button").addEventListener("click", function() {
	var html = document.querySelector("html");
	if (html.style.background === bg_two) html.style.background = bg_one;
	else html.style.background = bg_two;
});


