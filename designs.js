// Select color input
// Select size input
var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
	for (let y = 0; y < height; y++) {
		let row = canvas.insertRow(y);
		for (let x = 0; x < width; x++) {
			let cell = row.insertCell(x);

// When color is submitted by the user
			cell.addEventListener("mousedown", function(event) {
				cell.style.backgroundColor = color.value;
				cell.addEventListener("contextmenu", function(event) {
					event.preventDefault();
					cell.style.backgroundColor = "white";
				})
			})
		}
	}
}

//function that uses the size picker submit to call makeGrid() function
sizePicker.addEventListener("submit", function(event) {
	event.preventDefault();
	while (canvas.hasChildNodes()) {
		canvas.removeChild(canvas.lastChild);
	}
	makeGrid(height.value, width.value);
});
