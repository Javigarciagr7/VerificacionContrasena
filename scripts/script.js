function verificarContrasena() {
    const contraseña = document.getElementById("passwordInput").value;

    if (contraseña.length < 8 && !/[A-Z]/.test(contraseña) && !/[@#~]/.test(contraseña)) {
        alert("La contraseña no es valida");
        //En caso de querer hacerlo con un parrafo en vez de alert
        //document.getElementByYd("mensaje").innerHTML="La contraseña no es valida";
    }
    else{
        alert("La contraseña es valida");
    }
        
// En caso de querer comprobar que es lo que esta fallando exactamente en la contraseña
    /* 
    // Comprueba la longitud mínima de la contraseña
    if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Comprueba si la contraseña contiene al menos una mayúscula
    if (!/[A-Z]/.test(contraseña)) {
        alert("La contraseña debe contener al menos una letra mayúscula.");
        return;
    }

    // Comprueba si la contraseña contiene al menos uno de los siguientes símbolos: @, # o ~
    if (!/[@#~]/.test(contraseña)) {
        alert("La contraseña debe contener al menos uno de los siguientes símbolos: @, # o ~.");
        return;
    }

    // Si se cumplen todas las condiciones, la contraseña es válida
    alert("Contraseña verificada correctamente.");
    */
}