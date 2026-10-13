# Profesionalización de una aplicación Web

## Descripción

Este proyecto corresponde al Obligatorio 2026 de la materia Programación.

La aplicación **SweetsGlamour** es una tienda web que permite consultar productos, agregarlos a un carrito y realizar compras. También incluye registro e inicio de sesión, y un panel de administración para gestionar productos y consultar las ventas.

Durante el período de correcciones se mejoraron la navegación, la experiencia de compra, la validación del stock, la edición de productos y la organización de las pantallas de administración.

---

## Funcionalidades

### Usuarios y navegación

- Registro de usuarios desde una página independiente (`register.html`).
- Inicio y cierre de sesión.
- Acceso a la tienda sin necesidad de iniciar sesión.
- Posibilidad de agregar productos al carrito como visitante.
- Solicitud de inicio de sesión al intentar finalizar una compra sin una sesión activa.
- Regreso al carrito después de iniciar sesión para continuar con la compra.
- Diferenciación entre usuarios comunes y administradores.
- Restricción del acceso al panel de administración para usuarios que no tengan el rol de administrador.

### Productos

- Visualización de los productos disponibles.
- Búsqueda de productos por texto.
- Ordenamiento de productos por precio, de menor a mayor o de mayor a menor.
- Visualización del precio final y del stock disponible.
- Alta de productos desde el panel de administración.
- Modificación de productos mediante el mismo formulario de alta.
- Opciones para guardar o cancelar una modificación.
- Eliminación de productos.
- Cálculo del precio final según el tipo de IVA.

### Carrito de compras

- Agregar productos al carrito sin iniciar sesión.
- Modificar la cantidad de cada producto.
- Eliminar productos del carrito.
- Vaciar el carrito.
- Validación del stock disponible al agregar productos y modificar cantidades.
- Verificación del stock nuevamente antes de finalizar una compra.
- Visualización del precio sin IVA, el subtotal sin IVA, el IVA y el total con IVA.
- Registro de la compra y actualización del stock al finalizarla.

### Administración y ventas

- Panel de administración para agregar, modificar y eliminar productos.
- Acceso al panel limitado a usuarios con rol de administrador.
- Página independiente para consultar las ventas realizadas (`ventas.html`).
- Visualización de la fecha, el comprador, la cantidad de productos, el subtotal, el IVA y el total de cada venta.
- Opción para eliminar registros de ventas.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Módulos ES6 (`import` y `export`)
- LocalStorage
- Manipulación del DOM
- Listeners y delegación de eventos
- Bootstrap y Bootstrap Icons
- Git y GitHub
- GitHub Pages

---

## Estructura del proyecto

```text
obligatorio-2026/
├── index.html
├── productos.html
├── carrito.html
├── login.html
├── register.html
├── admin.html
├── ventas.html
├── css/
│   └── style.css
├── scripts/
│   ├── main.js
│   ├── authentication.js
│   ├── carrito.js
│   ├── login.js
│   ├── productos.js
│   ├── register.js
│   └── storage.js
└── img/
    ├── logo.png
    ├── logo2.jpg
    └── logo2.png
```

## Descripción de los archivos principales

- **`index.html`**: redirige a la página de productos.
- **`productos.html`**: muestra los productos disponibles y permite buscarlos, ordenarlos por precio y agregarlos al carrito. También contiene la navegación de inicio/cierre de sesión y los accesos al carrito y al panel de administración.
- **`carrito.html`**: muestra los artículos agregados, permite cambiar cantidades, eliminar artículos o vaciar el carrito, y presenta el resumen de importes.
- **`login.html`**: contiene el formulario de inicio de sesión.
- **`register.html`**: contiene el formulario de registro de usuarios.
- **`admin.html`**: permite administrar los productos registrados.
- **`ventas.html`**: muestra el listado de ventas realizadas.
- **`css/style.css`**: contiene los estilos de las páginas y sus componentes.
- **`scripts/main.js`**: conecta los módulos y registra los eventos de la interfaz.
- **`scripts/authentication.js`**: contiene la función de cierre de sesión.
- **`scripts/login.js`**: gestiona el inicio de sesión.
- **`scripts/register.js`**: gestiona el registro de usuarios.
- **`scripts/productos.js`**: contiene la lógica para mostrar, buscar, ordenar, agregar, modificar y eliminar productos, además de mostrar y eliminar ventas.
- **`scripts/carrito.js`**: gestiona los artículos del carrito, las cantidades, los cálculos de importes y la finalización de compras.
- **`scripts/storage.js`**: contiene funciones reutilizables para guardar y leer datos mediante LocalStorage.
- **`img/`**: contiene las imágenes utilizadas por la aplicación.

---

## Organización del código

Se utilizan **módulos ES6** con `import` y `export` para separar las responsabilidades en distintos archivos y reutilizar funciones entre ellos.

El archivo `main.js` centraliza la configuración de los eventos de la interfaz. Se utilizan listeners y delegación de eventos para gestionar acciones como agregar productos al carrito, modificar cantidades y operar sobre elementos creados dinámicamente.

## Almacenamiento de datos

La aplicación utiliza **LocalStorage** para conservar información en el navegador. Entre los datos gestionados se encuentran:

- Usuarios registrados.
- Usuario activo.
- Productos y stock.
- Carrito de compras.
- Ventas realizadas.

El archivo `scripts/storage.js` proporciona funciones para guardar y recuperar información en formato JSON. Los datos quedan almacenados en el navegador donde se utiliza la aplicación; no se utiliza una base de datos remota.

## Interfaz y usabilidad

Se realizaron ajustes de estilos y distribución para mejorar la legibilidad y el uso de las páginas. Entre los cambios se incluyen:

- Ajustes de tamaños, espaciado y distribución de elementos.
- Mejoras en la presentación de productos y botones de administración.
- Adaptación de las páginas a distintos tamaños de pantalla mediante la etiqueta `viewport`.
- Incorporación de Bootstrap y Bootstrap Icons en el pie de página de la tienda.
- Presentación separada del subtotal, el IVA y el total en el carrito.
- Organización del carrito para que el listado de productos pueda desplazarse sin perder de vista el resumen de totales.

---

## Ejecución

La aplicación no requiere instalación de dependencias de JavaScript.

1. Descargar o clonar el repositorio.
2. Abrir el proyecto en un navegador compatible.
3. Ingresar a `index.html`; la aplicación redirige a la página de productos.
4. También se puede utilizar la versión publicada en GitHub Pages.

Bootstrap y Bootstrap Icons se cargan desde CDN, por lo que se necesita conexión a Internet para que esos recursos externos se muestren correctamente.

---

## Publicación

**Repositorio GitHub:**  
https://github.com/emiigonzalezzz/obligatorio-2026

**Sitio publicado:**  
https://emiigonzalezzz.github.io/obligatorio-2026/

---

## Mejoras realizadas durante las correcciones

- Se creó `register.html` para separar el registro de la página principal.
- Se modificó `index.html` para abrir directamente la tienda.
- Se habilitó la navegación por productos y el uso del carrito sin iniciar sesión.
- Se agregó la redirección al login al intentar finalizar una compra como visitante y el retorno al carrito después de autenticarse.
- Se reforzaron las validaciones de stock durante la gestión del carrito y antes de completar una compra.
- Se incorporó la edición de productos desde el formulario de administración, con opciones para guardar o cancelar.
- Se trasladó la consulta de ventas a `ventas.html`.
- Se separó la visualización del subtotal, el IVA y el total en el carrito.
- Se ajustaron estilos y se añadió la etiqueta `viewport` en las páginas para mejorar la adaptación a pantallas.
- Se actualizó la navegación para mostrar las opciones de inicio de sesión, registro o cierre de sesión según corresponda.
