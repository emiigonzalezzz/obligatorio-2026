import{agregarProducto,modificarProducto,eliminarProducto,eliminarVenta,buscarProducto, filtrarPorPrecio} from "./productos.js";
import{ agregarCarrito, vaciarCarrito, finalizarCompra,cambiarCantidad,eliminarCarrito} from "./carrito.js";
import{validateSession,logout,login} from "./authentication.js";
import{ loginUsuario } from "./login.js";
import{ registerUsuario } from "./register.js";
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        loginUsuario();
 });
}
const registerForm = document.getElementById("registerForm");
if (registerForm){
    registerForm.addEventListener("submit", function(event){
    event.preventDefault();
    registerUsuario();
 });
}
const btnLogout = document.getElementById("btnLogout");
if (btnLogout){
    btnLogout.addEventListener("click", logout);
}
const btnAgregarProducto = document.getElementById("btn-agregar-producto");
if (btnAgregarProducto){
    btnAgregarProducto.addEventListener("click", agregarProducto);
}
const btnModificarProducto = document.getElementById("btn-modificar-producto");
if (btnModificarProducto){
    btnModificarProducto.addEventListener("click", modificarProducto);
}
const campoBusqueda = document.getElementById("buscarProducto")
if (campoBusqueda){
    campoBusqueda.addEventListener("input", buscarProducto);
}
const filtroPrecio = document.getElementById("filtroPrecio");
if (filtroPrecio){
    filtroPrecio.addEventListener("change", filtrarPorPrecio);
}
const contenedorProductos = document.getElementById("productos");
if (contenedorProductos){
    contenedorProductos.addEventListener("click", function(event){
    if (event.target.classList.contains("btn-carrito")) {
    const indice = Number(event.target.dataset.indice);
    agregarCarrito(indice);
 }
});
}
const btnVaciar = document.getElementById("btn-vaciar");
if (btnVaciar){
    btnVaciar.addEventListener("click", vaciarCarrito);
}
const btnComprar = document.getElementById("btn-comprar");
if (btnComprar){
    btnComprar.addEventListener("click", finalizarCompra);
}
const listaCarrito = document.getElementById("listaCarrito");
if (listaCarrito){
    listaCarrito.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-eliminar-carrito")){
    const indice = Number(event.target.dataset.indice);
    eliminarCarrito(indice);
 }
});
    listaCarrito.addEventListener("change", function(event){
    if (event.target.classList.contains("cantidad-carrito")){
    const indice = Number(event.target.dataset.indice);
    cambiarCantidad(indice, event.target.value);
  }
 });
}
const btnCarrito = document.getElementById("btn-carrito");
if (btnCarrito){
    btnCarrito.addEventListener("click", function(){
    window.location.href = "carrito.html";
    });
}
const btnAdmin = document.getElementById("btnAdmin");
if (btnAdmin){
    btnAdmin.addEventListener("click", function(){
    window.location.href = "admin.html";
 });
}
const btnProductos = document.getElementById("btn-productos");
if(btnProductos){
   btnProductos.addEventListener("click", function(){
   window.location.href = "productos.html";
 });
}
const listaAdmin = document.getElementById("listaAdmin");
if (listaAdmin){
    listaAdmin.addEventListener("click", function(event){
if (event.target.classList.contains("btn-eliminar-admin")){
const indice = Number(event.target.dataset.indice);
eliminarProducto(indice);
}
});
}
const tablaVentas = document.getElementById("tablaVentas");
if (tablaVentas){
    tablaVentas.addEventListener("click", function(event){
    if (event.target.classList.contains("btn-eliminar-venta")){
    const indice = Number(event.target.dataset.indice);
    eliminarVenta(indice);
 }
});
}
