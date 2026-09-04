export let productos = JSON.parse(localStorage.getItem("productos")) || [];
export function agregarProducto(){
let producto ={
     nombre: document.getElementById("nombre").value,
     descripcion: document.getElementById("descripcion").value,
     precio: document.getElementById("precio").value,
	 iva: document.getElementById("tipoIVA").value,
	 stock: document.getElementById("stock").value,
     imagen: document.getElementById("imagen").value
 };
productos.push(producto);
localStorage.setItem("productos", JSON.stringify(productos));
mostrarListaAdmin();
mostrarProductos();
limpiarAgregar();
}

function mostrarListaAdmin(){
    let lista = document.getElementById("listaAdmin");
    if (lista == null){
        return;
    }
    lista.innerHTML = "";
    for (let i = 0; i < productos.length; i++){
    let precioFinal = calcularPrecioFinal(productos[i]);
    lista.innerHTML += `
    <p>${productos[i].nombre} - $${precioFinal}
    <button class="btn-eliminar-admin" data-indice="${i}">Eliminar</button></p>
	`;
 }
}
export function eliminarProducto(indice){
    productos.splice(indice, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarListaAdmin();
    mostrarProductos();
}
export function modificarProducto(){
	let nombre = document.getElementById("nombreProducto").value;
    let nuevoNombre = document.getElementById("nuevoNombre").value;
    let descripcion = document.getElementById("nuevaDescripcion").value;
    let precio = document.getElementById("nuevoPrecio").value;
	let iva = document.getElementById("nuevoIVA").value;
	let stock = document.getElementById("nuevoStock").value;
    let imagen = document.getElementById("nuevaImagen").value;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == nombre){
			productos[i].nombre = nuevoNombre
            productos[i].descripcion = descripcion;
            productos[i].precio = precio;
			productos[i].iva = iva;
			productos[i].stock = stock;
            productos[i].imagen = imagen;
    break;
 }
}
localStorage.setItem("productos", JSON.stringify(productos));
mostrarListaAdmin();
mostrarProductos();
limpiarModificar();
}
if (document.getElementById("listaAdmin")){
    mostrarListaAdmin();
	mostrarVentas();
}

if (document.getElementById("productos")){
    mostrarProductos();
	verificarAdministrador();
};

function calcularPrecioFinal(producto){
    let precio = Number(producto.precio);
    let iva = 0;
    if(producto.iva == "minimo"){
        iva = 0.10;
    }else if(producto.iva == "basico") {
        iva = 0.22;	
}
else {
	iva = 0;
}
    return precio + (precio * iva);
}
function mostrarProductos(){
    let contenedor = document.getElementById("productos");
    if (contenedor == null){
        return;
}
    contenedor.innerHTML = "";
	for(let i = 0; i < productos.length; i++){
    let precioFinal = calcularPrecioFinal(productos[i]);
    contenedor.innerHTML += `
<div class="producto">
    <img src="${productos[i].imagen}" alt="${productos[i].nombre}">
    <h3>${productos[i].nombre}</h3>
    <p>${productos[i].descripcion}</p>
	<p>Stock disponible: ${productos[i].stock}</p>
    <p class="precio">$${precioFinal}</p>
	<button type="button" class="btn-carrito" data-indice="${i}">Agregar al carrito</button>
</div>
`;
}
}
function limpiarAgregar(){
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("tipoIVA").value = "minimo";
    document.getElementById("stock").value = "";
	document.getElementById("imagen").value = "";
}
function limpiarModificar(){
    document.getElementById("nombreProducto").value = "";
    document.getElementById("nuevoNombre").value = "";
    document.getElementById("nuevaDescripcion").value = "";
    document.getElementById("nuevoPrecio").value = "";
    document.getElementById("nuevoIVA").value = "minimo";
	document.getElementById("nuevoStock").value = "";
    document.getElementById("nuevaImagen").value = "";
}
function verificarAdministrador(){
    let usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    if(usuario == null || usuario.rol != "administrador"){
    document.getElementById("btnAdmin").style.display = "none";
}
}

export function buscarProducto(){
    let nombre = document.getElementById("buscarProducto").value.toLowerCase();
    let productosEncontrados = productos.filter(function(producto){
    return producto.nombre.toLowerCase().includes(nombre);
});
    let contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
    for(let i = 0; i < productosEncontrados.length; i++){
    let precioFinal = calcularPrecioFinal(productosEncontrados[i]);
    contenedor.innerHTML += `
    <div class="producto">
		<img src="${productosEncontrados[i].imagen}" alt="${productosEncontrados[i].nombre}">
        <h3>${productosEncontrados[i].nombre}</h3>
        <p>${productosEncontrados[i].descripcion}</p>
	    <p>Stock disponible: ${productosEncontrados[i].stock}</p>
        <p class="precio">$${precioFinal}</p>
        <button type="button" class="btn-carrito" data-indice="${productos.indexOf(productosEncontrados[i])}">Agregar al carrito</button>
    </div>
`;
}
}
export function filtrarPorPrecio(){
    let opcion = document.getElementById("filtroPrecio").value;
    if (opcion === "menor"){
        productos.sort((a,b) => Number(a.precio) - Number(b.precio));
 }else if(opcion === "mayor"){
        productos.sort((a,b) => Number(b.precio) - Number(a.precio));
}
  mostrarProductos(); 
}
function mostrarVentas(){
    let tabla = document.getElementById("tablaVentas");
    if(tabla == null){
        return;
}
let ventas = JSON.parse(localStorage.getItem("ventas")) || [];
    tabla.innerHTML = "";
    for(let i = 0; i < ventas.length; i++){
        tabla.innerHTML += `
 <tr>
 <td>${ventas[i].fecha}</td>
 <td>${ventas[i].comprador}</td>
 <td>${ventas[i].cantidadProductos}</td>
 <td>$${ventas[i].subtotal}</td>
 <td>$${ventas[i].iva}</td>
 <td>$${ventas[i].total}</td>
 <td class="accion">
 <button class="btn-carrito"onclick="eliminarVenta(${i})">Eliminar</button>
 </tr>
`;
}
}
export function eliminarVenta(indice){
    let ventas = JSON.parse(localStorage.getItem("ventas")) || [];
    ventas.splice(indice, 1);
    localStorage.setItem("ventas", JSON.stringify(ventas));
    mostrarVentas();
}
