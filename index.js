//1)
let productos = [
  {
    id: 1,
    nombre: "Bananas",
    precio: 2500,
    stock: 23,
  },
  {
    id: 2,
    nombre: "Manzanas",
    precio: 3500,
    stock: 14,
  },
  {
    id: 3,
    nombre: "Palta",
    precio: 3000,
    stock: 5,
  },
  {
    id: 4,
    nombre: "Kiwi",
    precio: 1000,
    stock: 3,
  },
  {
    id: 5,
    nombre: "Naranja",
    precio: 1500,
    stock: 424,
  },
];

productos.push({
  id: 6,
  nombre: "Peras",
  precio: 5.0,
  stock: 12,
});
productos.pop();
console.log(productos);

//2)
let productosEnStock = productos.filter(function (producto) {
  return producto.stock > 10;
});

console.log(productosEnStock);

//3)
const filtrarPorNombre = productos.find((producto) => {
  return producto.nombre == "Kiwi";
});

filtrarPorNombre != undefined
  ? console.log(filtrarPorNombre)
  : console.log("Producto no encontrado");

//4)
let precioTotal = productos.reduce(
  (acumulador, producto) => acumulador + producto.precio,
  0
);
console.log("Precio total " + precioTotal);
let calcularPromedio = function () {
  return precioTotal / productos.length;
};
console.log("Promedio " + calcularPromedio());

//5)
let existeConStockCero = productos.some((producto) => producto.stock === 0);
console.log("Existen productos con stock 0: " + existeConStockCero);
let todosCuestanMasDeCien = productos.every(
  (producto) => producto.precio > 100
);
console.log("Todos los productos cuesta mas de 100: " + todosCuestanMasDeCien);

//6)
let clientes = [
  {
    id: 1,
    nombre: "Manuel",
    edad: 20,
    compras: ["Bananas", "Kiwis", "Manzanas"],
  },
  {
    id: 2,
    nombre: "Odie",
    edad: 8,
    compras: ["Pollito", "Leche", "Carnitas"],
  },
  {
    id: 3,
    nombre: "Ramona",
    edad: 1,
    compras: ["Stitch"],
  },
];

clientes.forEach((cliente) =>
  console.log(
    "Cliente: " +
      cliente.nombre +
      " Cantidad de compras: " +
      cliente.compras.length
  )
);

//7)
function procesarClientes(clientes, callback) {
  callback(clientes);
}

procesarClientes(clientes, function (clientes) {
  console.log("Clientes: " + clientes.map((cliente) => cliente.nombre));
});

procesarClientes(clientes, function (clientes) {
  console.log(
    "Total de compras: " +
      clientes.reduce((acc, cliente) => acc + cliente.compras.length, 0)
  );
});
//8)
let numeros = [3, 4, 2, 6, 4, 1, 6, 8, 45, 21, 54];
numeros.sort((a, b) => a - b);
console.log("Descendente: " + numeros);
console.log("Ascendente: " + numeros.sort((a, b) => b - a));

//9)
let tienda = {
  productosTienda: [
    {
      id: 1,
      nombre: "Bananas",
      precio: 2500,
      stock: 23,
    },
    {
      id: 2,
      nombre: "Manzanas",
      precio: 3500,
      stock: 14,
    },
    {
      id: 3,
      nombre: "Palta",
      precio: 3000,
      stock: 5,
    },
    {
      id: 4,
      nombre: "Kiwi",
      precio: 1000,
      stock: 3,
    },
    {
      id: 5,
      nombre: "Naranja",
      precio: 1500,
      stock: 424,
    },
  ],

  vender: function (idProducto, cantidad) {
    let productoBuscado = this.productosTienda.find(
      (producto) => producto.id === idProducto
    );
    if (!productoBuscado) console.log("Producto no encontrado");
    else {
      if (productoBuscado.stock < cantidad) console.log("Stock insuficiente");
      else {
        productoBuscado.stock = productoBuscado.stock - cantidad;
        console.log("Venta realizada");
      }
    }
  },
};

tienda.vender(1, 1);
//10)
let carrito = [];
carrito.push(
  {
    producto: "Mouse",
    precioUnitario: 10000,
    cantidad: 3,
  },
  {
    producto: "Teclado",
    precioUnitario: 5000,
    cantidad: 5,
  },
  {
    producto: "Monitor",
    precioUnitario: 2000,
    cantidad: 10,
  }
);
let totalAPagar = carrito.reduce(
  (acc, producto) => acc + producto.cantidad * producto.precioUnitario,
  0
);
console.log("Total a pagar: " + totalAPagar);
let detalleCarrito = carrito.map(
  (p) =>
    "Producto: " +
    p.producto +
    " Cantidad: " +
    p.cantidad +
    " Subtotal: " +
    p.cantidad * p.precioUnitario
);
console.log(detalleCarrito);
//11)
let libros = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    disponible: true,
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopía",
    disponible: false,
  },
  {
    id: 3,
    titulo: "El Hobbit",
    autor: "J.R.R. Tolkien",
    genero: "Fantasía",
    disponible: true,
  },
];
console.log(libros.filter((libro) => libro.genero === "Fantasía"));
let titulosMayuscula = libros.map((libro) => libro.titulo.toUpperCase());
console.log(titulosMayuscula);

let prestarLibro = function (idLibro) {
  let libroBuscado = libros.find((libro) => libro.id === idLibro);
  if (!libroBuscado) {
    console.log("Libro no encontrado");
  } else if (libroBuscado.disponible) {
    libroBuscado.disponible = false;
    console.log("Prestamo realizado");
  }
};
prestarLibro(3);
//12)
let agenda = {
  contactos: [
    { id: 1, nombre: "Ana Pérez", telefono: "1123456789" },
    { id: 2, nombre: "Luis Gómez", telefono: "1139876543" },
    { id: 3, nombre: "María López", telefono: "1145678901" },
  ],
  agregarContacto: function (contacto) {
    this.contactos.push(contacto);
  },
  eliminarContacto: function (id) {
    this.contactos = this.contactos.filter((contacto) => contacto.id !== id);
  },
  buscarContacto: function (nombre) {
    console.log(this.contactos.find((contacto) => contacto.nombre === nombre));
  },
  listarContactos: function () {
    console.log(this.contactos);
  },
};
agenda.agregarContacto({
  id: 4,
  nombre: "Carlos Díaz",
  telefono: "1154321098",
});
agenda.eliminarContacto(2);
agenda.buscarContacto("María López");
agenda.listarContactos();
//13)
let alumnos = [
  { id: 1, nombre: "Juan Pérez", notas: [8, 7, 9] },
  { id: 2, nombre: "Lucía Gómez", notas: [1, 9, 7] },
  { id: 3, nombre: "Martín López", notas: [6, 7, 8] },
];
let promedioNotas = alumnos.map((alumno) => ({
  nombre: alumno.nombre,
  promedio:
    alumno.notas.reduce((acc, nota) => acc + nota, 0) / alumno.notas.length,
  id: alumno.id,
}));
let aprobados = promedioNotas.filter((alumno) => alumno.promedio > 6);
console.log(aprobados);

//14)
let productosCatorce = [
  { id: 1, nombre: "Vaso 3D Sonic", precio: 3500, stock: 10 },
  { id: 2, nombre: "Llavero personalizado", precio: 1200, stock: 25 },
  { id: 3, nombre: "Mate Stitch", precio: 5000, stock: 5 },
];

function comprar(id, cantidad, callbackError, callbackExito) {
  let buscado = productosCatorce.find((producto) => producto.id === id);
  if (!buscado) {
    callbackError("Producto no encontrado");
  } else {
    if (buscado.stock < cantidad) {
      callbackError("Stock insuficiente");
    } else {
      buscado.stock -= cantidad;
      callbackExito(buscado, cantidad);
    }
  }
}
let callbackExitoCompra = (producto, cantidad) =>
  console.log("Compra exitosa - Precio final: " + producto.precio * cantidad);
let callbackError = (mensaje) => console.log(mensaje);

comprar(2432, 2, callbackError, callbackExitoCompra);
comprar(1, 354446, callbackError, callbackExitoCompra);
comprar(2, 2, callbackError, callbackExitoCompra);

//15)
let callbackExitoDescuento = (producto) => {
  console.log(
    "Producto: " + producto.nombre + " - Nuevo precio: " + producto.precio
  );
};
let callbackExitoDescuentoYCompra = (producto, cantidad) => {
  callbackExitoDescuento(producto);
  callbackExitoCompra(producto, cantidad);
};
let aplicarDescuento = (id, porcentaje, callbackExito, callbackError) => {
  let buscado = productosCatorce.find((producto) => producto.id === id);
  if (!buscado) {
    callbackError("Producto no encontrado");
  } else {
    if (porcentaje < 1 || porcentaje > 99) {
      callbackError("Porcentaje invalido");
    } else {
      buscado.precio -= (buscado.precio * porcentaje) / 100;
      callbackExito(buscado);
    }
  }
};
aplicarDescuento(3423, 25, callbackExitoDescuento, callbackError);
aplicarDescuento(1, 103, callbackExitoDescuento, callbackError);
aplicarDescuento(1, 25, callbackExitoDescuento, callbackError);
aplicarDescuento(1, 25, callbackExitoDescuentoYCompra, callbackError);
///Corregir ultima parte de descuento + compra

//16)
let filtrarPorStock = (minStock, callbackExito, callbackError) => {
  let filtrados = productosCatorce.filter(
    (producto) => producto.stock >= minStock
  );
  if (filtrados.length === 0) {
    callbackError("No se encontraron productos con el stock minimo");
  } else {
    callbackExito(filtrados);
  }
};
const mostrarProductos = (listaProductos) => {
  listaProductos.forEach((producto) => console.log(producto));
};

filtrarPorStock(432, mostrarProductos, callbackError);
filtrarPorStock(1,mostrarProductos,callbackError);
