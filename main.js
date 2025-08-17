import { getBoard, getSelected, select } from "./module.js";

const Board = createBoard();
document.body.append(Board);

updateBoard();

// Cria elementos
function createBoard() {
    const newBoard = document.createElement('div');
    newBoard.classList.add('board');
    return newBoard;
}

function createCell(i, j, value) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (value === 0) {
        cell.classList.add('invalid');
        return cell;
    }
    if (getSelected() && getSelected()[0] === i && getSelected()[1] === j) {
        cell.classList.add('selected');
    }
    cell.addEventListener('click', () => {
        select(i, j);
        updateBoard();
    });
    const disc = document.createElement('div');
    disc.classList.add('disc');
    if (value === 2) disc.classList.add('empty');
    cell.appendChild(disc);
    return cell;
}

// Atualiza 
function updateBoard() {
    Board.innerHTML = '';
    const boardArr = getBoard();
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            Board.append(createCell(i, j, boardArr[i][j]));
        }
    }
}
