const container = document.getElementById("container");
const changeBtn = document.getElementById("changeGridBtn");

let gridSize = 16;

function createGridItem() {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", () => gridItem.classList.add("item-hover"));
    container.appendChild(gridItem);
}

function generateGrid() {
    container.innerHTML = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        createGridItem();
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    }
}

generateGrid();

changeBtn.addEventListener("click", function () {
    let newSize = parseInt(prompt("Enter number of squares per side: "));

    if (isNaN(newSize) || newSize < 1) {
        alert("Invalid number of rows.")
        return
    } else if (newSize > 100) {
        alert("Row size greater than 100 is not allowed.");
        return
    }

    gridSize = newSize;
    generateGrid();
});
