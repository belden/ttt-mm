class Cell {
	constructor() {
		this.state = 'X';
	}
}

init();
render();


function init() {
	$('.cell').each(function (cell) {
		$(this).data('cell', new Cell());
	});

}

function render() {
	$('.cell').each(function (cell) {
		$(this).text($(this).data('cell').state);
	});
}