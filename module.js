// 0 = inválido, 
// 1 = peça, 
// 2 = vazio
const initialBoard = [
    [0,0,1,1,1,0,0],
    [0,0,1,1,1,0,0],
    [1,1,1,1,1,1,1],
    [1,1,1,2,1,1,1],
    [1,1,1,1,1,1,1],
    [0,0,1,1,1,0,0],
    [0,0,1,1,1,0,0]
];

let board = initialBoard.map(row => [...row]);
let selected = null;

export function getSelected() {
    return selected;
}

export function getBoard() {
    return board.map(row => [...row]);
}

export function select(i, j) {
    if (!isValidCell(i, j)) return;
    if (selected === null && board[i][j] === 1) {
        selected = [i, j];
    } else if (selected && selected[0] === i && selected[1] === j) {
        selected = null;
    } else if (selected && board[i][j] === 2) {
        move(selected[0], selected[1], i, j);
        selected = null;
    }
}

function isValidCell(i, j) {
    return i >= 0 && i < 7 && j >= 0 && j < 7 && board[i][j] !== 0;
}

function move(si, sj, ti, tj) {
    if (board[si][sj] !== 1 || board[ti][tj] !== 2) return;
    const di = ti - si, dj = tj - sj;
    if ((Math.abs(di) === 2 && dj === 0) || (Math.abs(dj) === 2 && di === 0)) {
        const mi = si + di/2, mj = sj + dj/2;
        if (board[mi][mj] === 1) {
            board[si][sj] = 2;
            board[mi][mj] = 2;
            board[ti][tj] = 1;
        }
    }
}
