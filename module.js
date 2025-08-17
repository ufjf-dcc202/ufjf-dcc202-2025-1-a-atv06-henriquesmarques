const board = [
    'black',
    'black',
    'black',
    '',
    'white',
    'white',
    'white'
];

let selected = null;

export function getSelected() {
    return selected;
}

export function getBoard() {
    return [...board];
}

export function select(position) {
    if (selected === null) {
        selected = position;
    } else if (selected === position) {
        selected = null;
    } else {
        move(selected, position);
        selected = null;
    }
}

function move(before, after) {
    if (board[before] === '') return;
    if (board[after] !== '') return;
    if (Math.abs(after-before) > 2) return;
    if (after - before === 2 && board[before+1] === '') return;
    if (after - before === -2 && board[before+1] === '') return;

    board[after] = board[before];
    board[before] = '';
}
