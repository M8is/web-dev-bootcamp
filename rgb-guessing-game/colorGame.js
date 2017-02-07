// Globals ----------------------------------------------------------
var rightColor;
var numberOfColors = 6;
// ------------------------------------------------------------------

// Initialization ---------------------------------------------------
initialize(true);

function initialize(installEventListeners) {
    var colors = getRandomColors(numberOfColors);
    rightColor = pickRandomFrom(colors);
    createSquares(colors, installEventListeners);
    if (installEventListeners) {
        document.querySelector("#resetButton").addEventListener("click", clickedReset);
        var difficultyButtons = document.querySelectorAll(".difficultyBtn");
        for (var i = 0; i < difficultyButtons.length; i++) {
            difficultyButtons[i].addEventListener("click", function() {
                clickedDifficultySetting(this);
            })
        }
    }
    document.querySelector("#resetButton").textContent = "New Colors";
    changeColor(document.querySelector("h1"), "steelblue");
}

function getRandomColors(numberOfColors) {
    var colors = [];
    for (var i = 0; i < numberOfColors; i++) {
        colors.push(getRandomColor());
    }
    return colors;
}

function getRandomColor() {
    var red = getRandomColorValue();
    var green = getRandomColorValue();
    var blue = getRandomColorValue();
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

function pickRandomFrom(colors) {
    var pickedColor = colors[getRandomIndex(colors)];
    document.querySelector("#colorDisplay").textContent = pickedColor;
    return pickedColor;
}

function getRandomIndex(colors) {
    return Math.floor(Math.random() * colors.length);
}

function createSquares(colors) {
    var container = document.querySelector("#colorsContainer");
    initializeSquareContainer(container);
    for (var i = 0; i < colors.length; i++) {
        var square = document.createElement("div");
        container.appendChild(square);
        var color = colors[i];
        initializeSquare(square, color);
    }
}

function initializeSquare(square, color) {
    square.classList.add("square");
    changeColor(square, color);
    square.addEventListener("click", function() {
        clickedSquare(this)
    });
}
// ------------------------------------------------------------------

// Click Events -----------------------------------------------------
function clickedSquare(clickedSquare) {
    var clickedColor = clickedSquare.style.background;
    if (clickedColor === rightColor) {
        clickedRightColor(clickedSquare);
    } else {
        clickedWrongColor(clickedSquare);
    }
}

function clickedRightColor(clickedSquare) {
    var messageDisplay = document.querySelector("#messageDisplay");
    messageDisplay.textContent = "Correct!";
    document.querySelector("#resetButton").textContent = "Play Again?";
    changeAllColors(clickedSquare.style.background);
}

function clickedWrongColor(clickedSquare) {
    var messageDisplay = document.querySelector("#messageDisplay");
    messageDisplay.textContent = "Try Again";
    hideSquare(clickedSquare);
}

function clickedReset() {
    initialize(false);
}

function clickedDifficultySetting(clickedButton) {
    selectDifficultyButton(clickedButton);
    setDifficulty(clickedButton.getAttribute("difficulty"));
}

function selectDifficultyButton(buttonToSelect) {
    var difficultyButtons = document.querySelectorAll(".difficultyBtn");
    for (var i = 0; i < difficultyButtons.length; i++) {
        var difficultyButton = difficultyButtons[i];
        difficultyButton.classList.remove("selected");
    }
    buttonToSelect.classList.add("selected");
}
// ------------------------------------------------------------------

// Util -------------------------------------------------------------
function changeAllColors(color) {
    changeColor(document.querySelector("h1"), color);
    var squares = document.querySelectorAll(".square");
    for (var i = 0; i < squares.length; i++) {
        changeColor(squares[i], color);
    }
}

function changeColor(element, color) {
    element.style.background = color;
}

function setDifficulty(difficulty) {
    numberOfColors = difficulty;
    initialize();
}

function initializeSquareContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function hideSquare(square) {
    square.style.background = document.body.background;
}
// ------------------------------------------------------------------