var currentPlayer = 'X';


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




init();
render();

function changeThePlayer() {
	currentPlayer = currentPlayer === 'X' ? 'Y' : 'X';
}

function init() {
	$('.cell').each(function (cell) {
		$(this).data('cell', new Cell());
		$(this).click(function () {
			if ($(this).data('cell').setState(currentPlayer)) {
				changeThePlayer();
				render();
			}

		});
	});

}

function render() {
	$('.cell').each(function (cell) {
		$(this).text($(this).data('cell').state);
	});
}