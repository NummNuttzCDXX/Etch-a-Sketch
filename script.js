const div = document.createElement('div'),
container = document.querySelector('.container'),
btns = document.querySelectorAll('button')

let rows = [],
pen = 'red'

function createGrid(area) {
    // Rows
    let x = Math.sqrt(area)
    for (let i = 0; i < x; i++) {
        rows[i] = document.createElement('div');
        rows[i].classList.add('row')
        container.appendChild(rows[i]);

        // Cells
        for (let j = 0; j < x; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            rows[i].appendChild(cell);
        }
    }
}

// TEMP
let area = 16*16;
createGrid(area);

const cells = document.querySelectorAll('.cell') // Get Node List of all cells
// Iterate through list, for every cell listen for mouse over and change bg color to pen color
for (let cell of cells) {
    cell.addEventListener('mouseover', ()=> {
        cell.style.backgroundColor = pen;
    })
}

// Iterate through buttons, check each id, change pen color according
for (let btn of btns) {
    btn.addEventListener('click', () => {
        let color = btn.getAttribute('id')
        pen = color
    })
}