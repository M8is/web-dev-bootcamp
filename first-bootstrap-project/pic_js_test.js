document.querySelector("#books").addEventListener("mouseover", function() {
    zoomIn(this, document.querySelector("#life"));
})
document.querySelector("#books").addEventListener("mouseout", function() {
    zoomOut(this, document.querySelector("#life"));
})

document.querySelector("#life").addEventListener("mouseover", function() {
    zoomIn(this, document.querySelector("#books"));
})
document.querySelector("#life").addEventListener("mouseout", function() {
    zoomOut(this, document.querySelector("#books"));
})

function zoomIn(selection, other) {
    selection.classList.remove("col-sm-6");
    other.classList.remove("col-sm-6");

    selection.classList.add("col-sm-9");
    other.classList.add("col-sm-3");
}

function zoomOut(selection, other) {
    selection.classList.remove("col-sm-9");
    other.classList.remove("col-sm-3");

    selection.classList.add("col-sm-6");
    other.classList.add("col-sm-6");
}

function resize() {
    var height = window.innerHeight;
    var options = document.querySelectorAll(".option");
    for (var i = 0; i < options.length; i++) {
    	console.log(options[i]);
    	options[i].style.height = height + "px";
    }
}

resize();

window.onresize = function() {
    resize();
};
