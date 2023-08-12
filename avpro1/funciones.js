function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    }
    if (email === "") {
        alert("Por favor, ingrese su email.");
        return;
    }
    if (mensaje === "") {
        alert("Por favor, ingrese su mensaje.");
        return;
    }

    // Aquí puedes agregar el código para procesar el formulario
    // si todos los campos están completos
    // ...
}