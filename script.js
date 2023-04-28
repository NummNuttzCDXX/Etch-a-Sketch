const div = document.createElement('div'),
container = document.querySelector('.container')

let rows = []

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

const cells = document.querySelectorAll('.cell')
for (let cell of cells) {
    cell.addEventListener('mouseover', ()=> {
        cell.setAttribute('id', 'draw');
    })
}
