// Select color input
// Select size input
var canvas = document.getElementById("pixelCanvas");
var sizePicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    for (let x = 0; x < width; x++) {
        let cell = row.insertCell(x);
        for (let y = 0; y < height; y++) {
            let row = canvas.insertRow(y);
            cell.addEventListener("mousedown", function(evt) {
                cell.style.backgroundColor = color.value;
                cell.addEventListener("contextmenu", function(evt) {
                    evt.preventDefault();
                    cell.style.backgroundColor = "white";
                })
            })
        }
    }
}