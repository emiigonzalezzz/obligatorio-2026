import {productos} from "./productos.js";
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
export function agregarCarrito(indice) {
    let producto = productos[indice];
    if (Number(producto.stock) <= 0){
        alert("Producto sin stock");
        return;
}
    let encontrado = carrito.find(function(item){
    return item.producto.nombre == producto.nombre;
});
    if (encontrado){
    if(encontrado.cantidad < Number(producto.stock)){
      encontrado.cantidad++;
}else{
      alert("No hay más stock disponible");
      return;
}

}else{
      carrito.push({
      producto: producto,
      cantidad: 1
});

}
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}

function mostrarCarrito(){
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let lista = document.getElementById("listaCarrito");
    if (lista == null){
        return;
}
    lista.innerHTML = "";
    let subtotalGeneral = 0;
    let ivaGeneral = 0;
    let totalGeneral = 0;
    for (let i = 0; i < carrito.length; i++){
        let item = carrito[i];
        let precioBase = Number(item.producto.precio);
		let ivaPorcentaje;
	if(item.producto.iva == "minimo"){
    ivaPorcentaje = 0.10;
}else if (item.producto.iva == "basico"){
    ivaPorcentaje = 0.22;
}else if(item.producto.iva == "sin iva"){
    ivaPorcentaje = 0;
}else{
	ivaPorcentaje = 0;
}
    let ivaUnitario = precioBase * ivaPorcentaje;
    let precioFinal = precioBase + ivaUnitario;
    let subtotal = precioBase * item.cantidad;
	let iva = ivaUnitario * item.cantidad;
    let totalProducto = precioFinal * item.cantidad;
        subtotalGeneral += subtotal;
        ivaGeneral += iva;
        totalGeneral += totalProducto;
        lista.innerHTML += `
        <div class="producto-carrito">
            <img src="${item.producto.imagen}" alt="${item.producto.nombre}" width="120">
            <h3>${item.producto.nombre}</h3>
            <p>Stock disponible: ${item.producto.stock}</p>
            <input type="number" class="cantidad-carrito" min="1" max="${item.producto.stock}" value="${item.cantidad}" data-indice="${i}">
            <p>Precio c/u: $${precioBase.toFixed(2)}</p>
            <p>IVA: $${ivaUnitario.toFixed(2)}</p>
            <p class="total-producto">Total producto: $${totalProducto.toFixed(2)}</p>
            <button class="btn-eliminar-carrito" data-indice="${i}">Eliminar</button>
        </div>
 `;
}
    let totalElemento = document.getElementById("total");
    if (totalElemento) {
        totalElemento.innerHTML = `
            <p>Subtotal: $${subtotalGeneral.toFixed(2)}</p>
            <p>IVA: $${ivaGeneral.toFixed(2)}</p>
            <h3>Total: $${totalGeneral.toFixed(2)}</h3>
 `;
}
    let botonComprar = document.getElementById("btn-comprar");
    if (botonComprar){
    if (carrito.length == 0) {
        botonComprar.style.display = "none";
}else{
        botonComprar.style.display = "inline-block";
}
}
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
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    for (let i = 0; i < carrito.length; i++){
    let item = carrito[i];
    for(let j = 0; j < productos.length; j++){
    if(productos[j].nombre == item.producto.nombre){
    if(item.cantidad > Number(productos[j].stock)){
    alert("No hay stock suficiente para " + productos[j].nombre);
    return;
}
    productos[j].stock = Number(productos[j].stock) - item.cantidad;
    break;
}
}
}
localStorage.setItem("productos", JSON.stringify(productos));

    let ventas = JSON.parse(localStorage.getItem("ventas")) || [];
    let usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
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
}else if(item.producto.iva == "basico"){
    ivaPorcentaje = 0.22;
}else if (item.producto.iva == "sin iva"){
    ivaPorcentaje = 0;
}else{
	ivaPorcentaje = 0;
}
    let ivaUnitario = precioBase * ivaPorcentaje;
    let subtotalProducto = precioBase * item.cantidad;
    let ivaProducto = ivaUnitario * item.cantidad;
    let totalProducto = subtotalProducto + ivaProducto;
    subtotal += subtotalProducto;
    ivaTotal += ivaProducto;
    total += totalProducto;
}
    ventas.push({
    fecha: new Date().toLocaleString(),
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

mostrarCarrito();
