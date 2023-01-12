let selected_square_count = 0;

const grid_count_btn = document.querySelector('.grid-count-btn');
grid_count_btn.addEventListener('click', () => {
    let input = prompt('Input a number!');
    if (input > 0 && input <= 100 && input % 1 === 0)
        selected_square_count = input;
    else {
        alert('Seriously though, pick a number between 0 and 100.')
        selected_square_count = 0;
    }
});