let selected_square_count = 0;
let grid_container = document.querySelector('.grid-container');

const grid_count_btn = document.querySelector('.grid-count-btn');
grid_count_btn.addEventListener('click', () => {
    let input = prompt('Input a number!');
    if (input > 1 && input <= 100 && input % 1 === 0)
        selected_square_count = input;
    else {
        alert('Seriously though, pick a number between 2 and 100.')
        selected_square_count = 0;
    }
    removeGrid();
    createGrid(selected_square_count);
});

function removeGrid() {
    while (grid_container.firstChild) {
        grid_container.removeChild(grid_container.firstChild)
    }
}

function createGrid(selected_square_count) {
    let row = null;
    let grid_block = null;
    for (let i = 0; i < selected_square_count; i++) {
        row = document.createElement('div');
        for (let j = 0; j < selected_square_count; j++) {
            grid_block = document.createElement('div');
            grid_block.classList.add('grid-block');
            row.appendChild(grid_block);
            changeColor(grid_block);
        }
        row.classList.add('row');
        grid_container.appendChild(row);
    }
}

function changeColor(grid_block) {
    grid_block.addEventListener('mouseover', () => {            
    grid_block.style.backgroundColor = '#414141';
    })
}