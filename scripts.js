// this is the div that contains the 'pixels'
const gameContainer = document.querySelector(".game");

// access custom css property from :root
const numBoxInput = document.querySelector("#num-squares");
buildCanvas(numBoxInput.value);
console.log(numBoxInput.value + " is the num");

numBoxInput.addEventListener("blur", () => {
    if (numBoxInput.value === "") {
        numBoxInput.value = "16";
    }
    buildCanvas(numBoxInput.value);
});
numBoxInput.addEventListener("change", () => {
    buildCanvas(numBoxInput.value);
});

// delete previous divs, create new canvas with new size
function buildCanvas(sideLength) {
    const canvasDiv = document.querySelector(".canvas");
    while (canvasDiv.firstChild) {
        canvasDiv.removeChild(canvasDiv.lastChild);
    }

    // rescale number of columns and rows
    canvasDiv.style.gridTemplateColumns = "repeat(" + sideLength + ", 1fr)";
    canvasDiv.style.gridTemplateRows = "repeat(" + sideLength + ", 1fr)";

    for (let width = 0; width < (sideLength * sideLength); width++) {
        const newDiv = document.createElement("div");
        const pixelSideLength = 100 / sideLength;
        newDiv.classList = "pixel";
        newDiv.style.width = "100%";
        newDiv.style.height = "100%";
        canvasDiv.appendChild(newDiv);
    }
}

// test creating a new pixel