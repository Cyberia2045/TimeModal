var modal = document.getElementsByClassName("modal")[0];
var button = document.getElementsByClassName("button")[0];
var blur = document.getElementsByClassName("blur")[0];
var closeBox = document.getElementsByClassName("close")[0];

window.onload = function() {
	setTimeout(modalDisplay, 3000);

	function modalDisplay() {
		modal.style.display = "block"
		blur.style.display = "block"

	}; // closes modalDisplay()
}; // closes window.onload

button.addEventListener("click", closeModal);
closeBox.addEventListener("click", closeModal);
blur.addEventListener("click", closeModal);

function closeModal() {
	modal.style.display = "none"
	blur.style.display = "none"
}; // closes closeModal()






