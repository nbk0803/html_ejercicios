document.getElementById("registrationForm").addEventListener("submit", function(event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        alert("Porfavor llena la encuesta correctamente");
    }
});