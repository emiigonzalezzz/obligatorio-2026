export function registerUsuario() {

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (nombre === "" || email === "" || password === "") {
        alert("Debe completar todos los datos");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    let usuarioExistente = null;
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].email === email){
            usuarioExistente = usuarios[i];
            break;
        }
    }
    if(usuarioExistente){
        alert("Ya existe un usuario con ese correo");
        return;
    }
    let usuario = {
        id: usuarios.length + 1,
        nombre: nombre, 
        email: email,
        password: password,
    };

    usuarios.push(usuario);
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios));
    console.log(usuarios);
    alert("Usuario registrado correctamente");
	window.location.href = "login.html";
	document.getElementById("registerForm").reset();
}