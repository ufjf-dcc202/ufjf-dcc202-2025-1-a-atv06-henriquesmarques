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

function createDisc(color, position) {
    const newDisc = document.createElement('div');
    newDisc.classList.add('disc');
    newDisc.dataset.position = position;
    newDisc.dataset.color = color;
    newDisc.addEventListener('click', clickOnBoard);
    return newDisc;
}

// Trata evento
function clickOnBoard(event) {
    const position = Number(event.target.dataset.position);
    select(position);
    updateBoard();
}

// Atualiza 
function updateBoard() {
    Board.innerHTML = '';
    const newBoard = getBoard();
    for (let id = 0; id < 7; id++) {
        const newDisc = createDisc(newBoard[id], id);
        Board.append(newDisc);
        if (id === getSelected()) {
            newDisc.classList.add('selected');
        }
    }
}
