export function logout(){
    localStorage.removeItem("usuarioActivo");
    window.location.href = "productos.html";
}
