var sendEmail = document.querySelector(".contacts .btn");
var popup = document.querySelector(".modal-content");

sendEmail.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
});

var closePopup = document.querySelector(".btn-close");
closePopup.addEventListener("click", function(event) {					
	popup.classList.remove("modal-content-show");
});
