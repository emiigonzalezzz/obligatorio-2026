import { guardarEnStorage, leerDeStorage } from "./storage.js";
export function validateSession(){
    let session = leerDeStorage("sessionData", null);
    if (!session){
        window.location.href = "login.html";
        return;
 }
    document.getElementById("usuarioActual").innerHTML = "Bienvenido <b>'" + session.nombre + "'</b>";
}
export function logout(){
    localStorage.removeItem("sessionData"); 
    window.location.href = "login.html";
}
export function login(nuevoUsuario){
    let sessionExistente = leerDeStorage("sessionData", null);
    if (sessionExistente) {
        alert("Ya hay una sesión activa");
        return;
 }
    guardarEnStorage("sessionData", nuevoUsuario);
    window.location.href = "index.html";
}
