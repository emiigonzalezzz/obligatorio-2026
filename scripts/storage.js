export function guardarEnStorage(clave, valor){
	localStorage.setItem(clave, JSON.stringify(valor));
}
export function leerDeStorage(clave, valorPorDefecto){
	let contenido = localStorage.getItem(clave);
	if(!contenido){
	return valorPorDefecto;
}
	try{
	return JSON.parse(contenido);
	}
	catch(e){
	console.error(e);
	return valorPorDefecto;
}
}