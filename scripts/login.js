const admin = {
    email: "admin@gmail.com",
    password: "admin123",
    nombre: "administrador"
};
export function loginUsuario() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    let usuarioEncontrado = null;
    if(email === "" || password === ""){
        alert("Debe completar todos los datos");
        return;
}		
	
	if (email === admin.email && password === admin.password){

       localStorage.setItem("usuarioActivo", JSON.stringify({
        nombre: admin.nombre,
        email: admin.email,
        rol: "administrador"
}));
        window.location.href = "admin.html";
        return;
}
	
    for(let i = 0; i < usuarios.length; i++){
     if(usuarios[i].email === email && usuarios[i].password === password){
        usuarioEncontrado = usuarios[i];
        break;
     }
  }
    if(usuarioEncontrado){
        localStorage.setItem("usuarioActivo",JSON.stringify(usuarioEncontrado));
        alert("Bienvenido " + usuarioEncontrado.nombre);
        window.location.href = "productos.html";
 }
    else{
        alert("Correo o contraseña incorrecto");
    }
}