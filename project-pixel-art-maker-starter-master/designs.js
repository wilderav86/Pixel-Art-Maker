// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');

const table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (event) {
	event.preventDefault();
	let height = document.getElementById('inputHeight').value;
	let width = document.getElementById('inputWidth').value;

	makeGrid(height, width);
});


function makeGrid(height, width) {
	table.innerHTML = "";
	// while h is less than height input, create a row for each iteration.
	for (let h = 0; h < height; h++) {
		let row = document.createElement('tr');
		table.appendChild(row);
		//while w is less than height input, add cells to the row created in above loop.
		for (let w = 0; w < width; w++) {
			let cell = document.createElement('td');
			row.appendChild(cell);
			cell.addEventListener('click', function (event) {
				cell.style.backgroundColor = colorPicker.value;
			});
		}
	}
};
