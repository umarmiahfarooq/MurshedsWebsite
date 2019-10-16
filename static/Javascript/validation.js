function validateForm(){
	var firstname = document.getElementById("fname");
	var lastname = document.getElementById("fname");
	var message = document.getElementById("message");
	
	if (firstname.value === "" || firstname.value === "" || message.value === "") {
		alert("Fields marked with * cannot be left empty");
		return false;
	}
}