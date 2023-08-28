let container = document.querySelector(".container")

let button = document.querySelector(".gridButton")
button.addEventListener("click", getGridSize)

function getGridSize() {
    let grid = prompt()
    console.log(grid)
    if (grid > 100) {
        alert("Too High")
    } else if (grid === "") {
        alert("Enter a number")
    } else {
        deleteGrid()
        createGrid(grid)
    }
}

function deleteGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
}

function createGrid(gridSize) {
    for (i = 0; i < (gridSize * gridSize); i++) {
        let box = document.createElement("div")
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "rgb(189, 189, 189)"
        })
        box.classList.add("box")
        let size = 500 / gridSize
        box.style.width = `${size}px`
        box.style.height = `${size}px`
        container.appendChild(box)
    }
}

