class Cell {
	constructor() {
		this.state = null;
	}

	setState(value) {
		if (this.state) {
			return false;
		}

		this.state = value;
		return true;
	}
}

class Game {
	constructor() {
		this.cells = [];
		for (let i = 0; i < 9; i++) {
			this.cells.push(new Cell());
		}

		this.winsPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
		this.thereIsAWinner = false;

	}

	whoWins() {
		for (let i = 0; i < this.winsPatterns.length; i++) {
			let pattern = this.winsPatterns[i];
			if (this.cells[pattern[0]].state &&
				this.cells[pattern[0]].state === this.cells[pattern[1]].state &&
				this.cells[pattern[0]].state === this.cells[pattern[2]].state) {

				this.thereIsAWinner = true;

				return this.cells[pattern[0]].state;
			}
		}

		return false;
	}

	

}

let currentPlayer = 'X';
let game = new Game();

init();
render();

function changeThePlayer() {
	currentPlayer = currentPlayer === 'X' ? 'Y' : 'X';
}

function init() {
	$('.cell').each(function ( index ) {
		$(this).data('cell', game.cells[index]);
		$(this).click(function () {

			if (game.thereIsAWinner) {
				return;
			}

			if ($(this).data('cell').setState(currentPlayer)) {
				changeThePlayer();
				render();
				let winner = game.whoWins();
				if (winner) {
					showTheWinner(winner);
				}
			}
		});
	});

}

function render() {
	$('.cell').each(function (cell) {
		let state = $(this).data('cell').state;

		if (state) {
			$(this).text(state);
			$(this).css('background-color', state === 'X' ? 'green' : 'LemonChiffon ');
		}
		
		$(this).text($(this).data('cell').state);
	});
}


function showTheWinner(winner) {
	$('#winner').text(winner);
	$('#winnerContainer').show();
}
