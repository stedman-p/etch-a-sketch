// this is the div that contains the 'pixels'
const gameContainer = document.querySelector(".game");

// get number of squares from input
const numBoxInput = document.querySelector("#num-squares-box");
const numSliderInput = document.querySelector("#num-squares-slider");


buildCanvas(numBoxInput.value);

// listeners to change canvas size from input

numSliderInput.addEventListener("change", () => {
    buildCanvas(numSliderInput.value);
})

numBoxInput.addEventListener("change", () => {
    buildCanvas(numBoxInput.value);
});

numBoxInput.addEventListener("blur", () => {
    if (numBoxInput.value === "") {
        numBoxInput.value = numSliderInput.value;
    }
    buildCanvas(numBoxInput.value);
});

// button to clear canvas
const clearCanvasBtn = document.querySelector("#clear-canvas");
clearCanvasBtn.addEventListener("click", () => {
    // play shake animation
    const canvasDiv = document.querySelector(".canvas");    
    canvasDiv.classList.add("shake");
    // remove shake class after animation is finished
    setTimeout(() => {
        clearCanvas();
        buildCanvas(numBoxInput.value);
        canvasDiv.classList.remove("shake");
    }, 510);
});

function clearCanvas() {
    const canvasDiv = document.querySelector(".canvas");
    while (canvasDiv.firstChild) {
        canvasDiv.removeChild(canvasDiv.lastChild);
    }
}

// create new canvas with new size
function buildCanvas(sideLength) {

    // delete old divs
    clearCanvas();

    // rescale number of columns and rows
    const canvasDiv = document.querySelector(".canvas");
    canvasDiv.style.gridTemplateColumns = "repeat(" + sideLength + ", 1fr)";
    canvasDiv.style.gridTemplateRows = "repeat(" + sideLength + ", 1fr)";

    // create new pixel divs
    for (let width = 0; width < (sideLength * sideLength); width++) {
        const newDiv = document.createElement("div");
        const pixelSideLength = 100 / sideLength;
        newDiv.classList = "pixel";
        newDiv.style.width = "100%";
        newDiv.style.height = "100%";
        newDiv.style.border = "none";
        canvasDiv.appendChild(newDiv);
    }

    // make the pixels change color when moused-over
    pixels = document.querySelectorAll(".pixel");

    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        })
    });
}

// test creating a new pixel