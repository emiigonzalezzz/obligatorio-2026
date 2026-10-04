import {productos, calcularPrecioFinal} from "./productos.js";
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

export function agregarCarrito(indice){
    let carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    let producto = productos[indice];
    if (!producto){
        alert("No se encontró el producto");
        return;
}
    if (Number(producto.stock) <= 0){
    	alert("Producto sin stock");
        return;
}
    let encontrado = carritoActual.find(function(item){
        return item.producto.nombre == producto.nombre;
});
    if (encontrado){
        if (encontrado.cantidad < Number(producto.stock)){
            encontrado.cantidad++;
}else{
        alert("No hay más stock disponible");
        return;
}
}else{
        carritoActual.push({
        producto: producto,
        cantidad: 1
});

}
    localStorage.setItem("carrito", JSON.stringify(carritoActual));
    alert("Producto agregado al carrito");
}

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let lista = document.getElementById("listaCarrito");
    if (!lista) {
        return;
}
    lista.innerHTML = "";
    if (carrito.length === 0) {
        lista.innerHTML = "<p>El carrito está vacío.</p>";
        return;
}
    carrito.forEach(function(item, indice) {
        let producto = item.producto;
        let cantidad = item.cantidad;
        let precio = calcularPrecioFinal(producto);
        let subtotal = precio * cantidad;
        lista.innerHTML += `
            <div class="producto-carrito">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${precio}</p>
            <p>Cantidad: ${cantidad}</p>
            <p>Subtotal: $${subtotal}</p>
            <button class="btn-eliminar-carrito" data-indice="${indice}">Eliminar</button>
            </div>
            </div>
`;
});
}
if (document.getElementById("listaCarrito")) {
    mostrarCarrito();
}

export function cambiarCantidad(indice, cantidad){
    cantidad = Number(cantidad);
    if (cantidad < 1){
        cantidad = 1;
}
    if (cantidad > Number(carrito[indice].producto.stock)){
        cantidad = Number(carrito[indice].producto.stock);
}
    carrito[indice].cantidad = cantidad;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}
export function eliminarCarrito(indice) {
    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}
export function vaciarCarrito(){
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

export function finalizarCompra(){
    let usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (usuario == null){
        alert("Debes iniciar sesión para finalizar la compra");
        window.location.href = "login.html";
        return;
    }
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    for (let i = 0; i < carrito.length; i++){
        let item = carrito[i];
        for (let j = 0; j < productos.length; j++){
        if (productos[j].nombre == item.producto.nombre){
        if (item.cantidad > Number(productos[j].stock)){
            alert("No hay stock suficiente de " + productos[j].nombre);
            return;
	}
            break;
		}
	}
}
    for (let i = 0; i < carrito.length; i++){
        let item = carrito[i];
        for (let j = 0; j < productos.length; j++){
        if (productos[j].nombre == item.producto.nombre){
        	productos[j].stock = Number(productos[j].stock) - item.cantidad;
            break;
        }
    }
}
    localStorage.setItem("productos", JSON.stringify(productos));
    let ventas = JSON.parse(localStorage.getItem("ventas")) || [];
    let cantidadProductos = 0;
    let subtotal = 0;
    let ivaTotal = 0;
    let total = 0;
    for (let i = 0; i < carrito.length; i++){
        let item = carrito[i];
        cantidadProductos += item.cantidad;
        let precioBase = Number(item.producto.precio);
        let ivaPorcentaje;
        if (item.producto.iva == "minimo"){
            ivaPorcentaje = 0.10;
        }
        else if (item.producto.iva == "basico"){
            ivaPorcentaje = 0.22;
        }
        else if (item.producto.iva == "sin iva"){
            ivaPorcentaje = 0;
		}
        else{
            ivaPorcentaje = 0;
}

        let subtotalProducto = precioBase * item.cantidad;
		let ivaProducto = precioBase * ivaPorcentaje * item.cantidad;
        let totalProducto = subtotalProducto + ivaProducto;
        subtotal += subtotalProducto;
        ivaTotal += ivaProducto;
        total += totalProducto;
}
    ventas.push({fecha: new Date().toLocaleString(),
        comprador: usuario.nombre,
        cantidadProductos: cantidadProductos,
        subtotal: subtotal,
        iva: ivaTotal,
        total: total
});
    localStorage.setItem("ventas", JSON.stringify(ventas));
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Compra realizada correctamente");
    mostrarCarrito();
}
