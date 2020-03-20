let players = ['x', 'o'];
let activePlayer;
let field;

function startGame() {
    activePlayer = 0;
    field = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    renderBoard(field);
};

function checkWin() {
    let shot = players[activePlayer];

    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field.length; j++) {
            if (field[i][0] === shot && field[i][1] === shot && field[i][2] === shot) {
                showWinner(activePlayer);
            } else if (field[0][j] === shot && field[1][j] === shot && field[2][j] === shot) {
                showWinner(activePlayer);
            } else if (field[0][0] === shot && field[1][1] === shot && field[2][2] === shot) {
                showWinner(activePlayer);
            } else if (field[0][2] === shot && field[1][1] === shot && field[2][0] === shot) {
                showWinner(activePlayer);
            }
        }
    }
}

function click(row, col) {
    field[row][col] = players[activePlayer];
    renderBoard(field);
    checkWin();
    activePlayer = +!activePlayer;
};