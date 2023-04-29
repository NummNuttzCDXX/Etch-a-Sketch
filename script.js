const div = document.createElement('div'),
    container = document.querySelector('.container'),
    btns = document.querySelectorAll('.color'),
    sizeBtns = document.querySelectorAll('.size')

// let rows = [],
let pen = 'red'

function createGrid(area) {
    // Rows
    let x = Math.sqrt(area)
    for (let i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        container.appendChild(row);

        // Cells
        for (let j = 0; j < x; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

// Initial
createGrid(16*16);
draw()



function draw() {
    let cells = document.querySelectorAll('.cell') // Get Node List of all cells
    // Iterate through list, for every cell listen for mouse over and change bg color to pen color
    for (let cell of cells) {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = pen;
        })
    }
}


// Iterate through color buttons, check each id, change pen color according
for (let btn of btns) {
    btn.addEventListener('click', () => {
        let color = btn.getAttribute('id')
        pen = color
    })
}

// Iterate through size buttons, check id, remove grid and create new one
for (let btn of sizeBtns) {
    btn.addEventListener('click', () => {
        let rows = document.querySelectorAll('.row')
        // Remove each row
        rows.forEach((row) => {
            container.removeChild(row)
        })

        let size = btn.getAttribute('id')
        createGrid(size * size)
        draw()
    })
}