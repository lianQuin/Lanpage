function validar(){
    let nombre, apellido, telefono, email, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    
    telefono = document.getElementById("telefono").value;
    
    email = document.getElementById("email").value;
    
    expresion = /\w+@\w+\.+[a-z]/;
    
    if(nombre==="" || apellido === "" || telefono === "" || email === ""){
        alert("Todos los campos son obligatorios");
    return false;
    }
    else if(!expresion.test(email)) {
        alert("El correo no es válido");
    }
    else if(isNaN(telefono)) {
        alert("El teléfono ingresado no es un número");
        return false;
    }
    
    
    }