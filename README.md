# Profesionalización de una aplicación Web

## Descripción

Este proyecto corresponde al Obligatorio 2026 de la materia Programación.

La aplicación consiste en un sitio web con gestión de usuarios, productos y carrito de compras. A partir de una aplicación desarrollada previamente, se realizaron modificaciones orientadas a mejorar la organización del código, la navegación, la experiencia de usuario y la estructura del proyecto.

---

## Funcionalidades

### Usuarios

- Registro de usuarios.
- Inicio de sesión.
- Validación de sesión.
- Cierre de sesión.
- Manejo de datos mediante LocalStorage.
- Diferenciación de usuario administrador.

### Productos

- Visualización de productos.
- Agregar productos desde el panel de administración.
- Modificar productos.
- Eliminar productos.
- Cálculo del precio final según el tipo de IVA.
- Visualización del stock disponible.
- Búsqueda de productos.
- Filtrado de productos por precio.

### Carrito de compras

- Agregar productos al carrito.
- Modificar la cantidad de productos.
- Eliminar productos del carrito.
- Vaciar el carrito.
- Cálculo del subtotal.
- Cálculo del IVA.
- Cálculo del total.
- Finalización de la compra.

### Administración

El sistema cuenta con un panel de administración desde el cual se pueden gestionar los productos registrados.

También permite visualizar las ventas realizadas.
---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JavaScript ES6 Modules
- LocalStorage
- Manipulación del DOM
- Event Delegation
- GitHub
- GitHub Pages
---
## Estructura del proyecto

obligatorio-2026/
│
├── index.html
├── productos.html
├── carrito.html
├── login.html
├── admin.html
│
├── css/
│   └── style.css
│
├── scripts/
│   ├── main.js
│   ├── authentication.js
│   ├── carrito.js
│   ├── login.js
│   ├── productos.js
│   ├── register.js
│   └── storage.js
│
└── img/

Descripción de los archivos principales

index.html
Página principal de la aplicación.

productos.html
Página donde se muestran los productos disponibles, permitiendo realizar búsquedas, filtros y agregar productos al carrito.

carrito.html
Página correspondiente al carrito de compras.

login.html
Página de inicio de sesión.

admin.htmL
Panel destinado a la administración de productos y visualización de ventas.

style.css
Archivo que contiene los estilos utilizados en las diferentes páginas.

main.js
Módulo principal encargado de conectar las diferentes funcionalidades y gestionar los eventos de la aplicación.

productos.js
Contiene las funcionalidades relacionadas con la gestión y visualización de productos.

carrito.js
Contiene la lógica correspondiente al carrito de compras.

authentication.js
Contiene las funciones relacionadas con la sesión y autenticación.

login.js
Contiene la lógica del inicio de sesión.

register.js
Contiene la lógica correspondiente al registro de usuarios.

storage.js
Contiene funciones reutilizables para guardar y leer información de LocalStorage.

Módulos ES6
Como parte de la profesionalización del proyecto se incorporaron módulos ES6 mediante import y export.
Esto permite separar las diferentes funcionalidades en archivos independientes y reutilizar funciones entre los distintos módulos.

LocalStorage
La aplicación utiliza LocalStorage para guardar información en el navegador.

Entre los datos almacenados se encuentran:
Usuarios.
Sesión.
Productos.
Carrito.
Ventas.

Para facilitar el manejo del almacenamiento se creó el archivo:

scripts/storage.js
Este archivo contiene funciones para guardar y recuperar información utilizando JSON.

Manipulación del DOM
JavaScript se utiliza para modificar dinámicamente el contenido de las páginas.

Entre las funcionalidades que utilizan manipulación del DOM se encuentran:
Mostrar productos.
Mostrar productos en el panel de administración.
Actualizar el carrito.
Actualizar cantidades.
Mostrar ventas.
Limpiar formularios.
Realizar búsquedas y filtros.
Actualizar información después de agregar, modificar o eliminar elementos.

Diseño y estilos
La aplicación utiliza CSS para definir la apariencia de las diferentes páginas.
Se trabajó en:

Organización visual de los contenidos.
Formularios.
Botones.
Productos.
Carrito.
Panel de administración.
Tablas.
Distribución de los elementos.
Adaptación de la interfaz a diferentes tamaños de pantalla.
Accesibilidad y usabilidad

El proyecto fue publicado utilizando GitHub Pages.
Repositorio
https://github.com/emiigonzalezzz/obligatorio-2026
Sitio web
https://emiigonzalezzz.github.io/obligatorio-2026/

Ejecución

La aplicación no requiere instalación de dependencias externas.

Para utilizar el proyecto:
Descargar o clonar el repositorio.
Abrir el proyecto en un navegador.
Ingresar a la página principal.
Utilizar las diferentes funcionalidades disponibles.
También puede utilizarse directamente desde la versión publicada mediante GitHub Pages.

Entre las modificaciones realizadas se encuentran:
Separación de funcionalidades en diferentes archivos JavaScript.
Incorporación de módulos ES6.
Uso de import y export.
Creación de un módulo para las operaciones de LocalStorage.
Separación de la lógica de productos, carrito, autenticación y registro.
Creación de un archivo main.js para centralizar la gestión de eventos.
Reemplazo de eventos inline por listeners de JavaScript.
Implementación de delegación de eventos.
Organización de los archivos del proyecto en carpetas.

Funcionalidades principales implementadas:
Registro de usuarios
Inicio de sesión
Gestión de sesiones
Gestión de productos
Búsqueda de productos
Filtros por precio
Carrito de compras
Gestión de cantidades
Finalización de compras
Registro de ventas
Panel de administración
LocalStorage
Módulos ES6
Manipulación del DOM
Delegación de eventos
Publicación mediante GitHub Pages
