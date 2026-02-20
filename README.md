# E-commerce App — ReactJS

Aplicación de e-commerce desarrollada con React, Firebase y React Bootstrap. Permite navegar productos por categoría, ver el detalle de cada uno, agregar al carrito y finalizar la compra generando una orden en Firestore.

## Demo

> Deploy: _(agregar link de Vercel/Netlify acá)_

## Tecnologías

- [React](https://reactjs.org/) — biblioteca principal de UI
- [React Router v6](https://reactrouter.com/) — navegación y rutas
- [Firebase / Firestore](https://firebase.google.com/) — base de datos y backend
- [React Bootstrap](https://react-bootstrap.github.io/) — componentes de UI
- [React Icons](https://react-icons.github.io/react-icons/) — íconos

## Funcionalidades

- Listado de productos desde Firestore
- Filtrado por categoría (zapatillas / remera)
- Vista de detalle de producto con selector de cantidad
- Carrito de compras con Context API
  - Agregar, eliminar y vaciar productos
  - Actualización de cantidad si el producto ya está en el carrito
- Checkout con formulario de datos del comprador
- Generación de orden en Firestore y actualización de stock

## Instalación

Requiere [Node.js](https://nodejs.org/en/)

```bash
git clone https://github.com/fedeclaver/react.git
cd react
npm install
npm start
```

### Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las credenciales de Firebase:

```
REACT_APP_API_KEY=...
REACT_APP_AUTH_DOMAIN=...
REACT_APP_PROJECT_ID=...
REACT_APP_STORAGE_BUCKET=...
REACT_APP_MESSAGING_SENDER_ID=...
REACT_APP_APP_ID=...
```

## Estructura del proyecto

```
src/
├── Components/
│   ├── Cart/           # Carrito y checkout
│   ├── Item/           # Tarjeta de producto
│   ├── ItemCount/      # Selector de cantidad
│   ├── ItemDetail/     # Vista de detalle
│   ├── ItemList/       # Grilla de productos
│   ├── Navbar/         # Barra de navegación
│   └── Widget/         # Ícono del carrito con contador
├── Container/
│   ├── ItemListContainer/    # Fetch y listado de productos
│   └── ItemDetailContainer/ # Fetch de producto individual
├── Context/
│   └── CartContext.jsx  # Estado global del carrito
└── db/
    └── firebase.js      # Configuración de Firebase
```
