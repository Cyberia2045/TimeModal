var modal = document.getElementsByClassName("modal")[0];
var button = document.getElementsByClassName("button")[0];
var blur = document.getElementsByClassName("blur")[0];

window.onload = function() {
	setTimeout(modalDisplay, 3000);

	function modalDisplay() {
		modal.style.display = "block"
		blur.style.display = "block"
	};
}; 








