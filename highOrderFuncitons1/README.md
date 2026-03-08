# E-Commerce Inventory Manager

Un sistema sencillo de gestión de inventario para comercio electrónico desarrollado en Node.js utilizando ES Modules.

##  Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `src/data/database.js`: Contiene la base de datos simulada (un arreglo de productos con detalles como id, nombre, categoría, precio y stock).
- `src/services/inventoryManager.js`: Contiene la lógica de negocio y las funciones para operar sobre el inventario:
  - `filterByCategory(category)`: Retorna los productos de una categoría específica.
  - `hasOutOfStockProducts()`: Verifica si hay productos agotados (`stock: 0`).
  - `getOffersByCategory(category)`: Devuelve una lista de productos de una categoría con un 20% de descuento aplicado.
- `src/index.js`: Archivo de entrada ("entry point") que ejecuta casos de uso de prueba mostrados en la consola.
- `package.json`: Configuración del proyecto de Node.

## Requisitos

- [Node.js](https://nodejs.org/) instalado en el sistema.

## Cómo ejecutar el proyecto

1. Abir start.bat

Verás en la consola los resultados de:
- Filtro de productos de Electrónica.
- Verificación de productos agotados.
- Cálculo de ofertas para la categoría Muebles.

##  Tecnologías

- JavaScript (Node.js)
- ES Modules (`import` / `export`)
