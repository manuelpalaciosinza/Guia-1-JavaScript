//1)
let productos = [{
    id: 1,
    nombre: "Bananas",
    precio: 2500,
    stock: 23
},
{
    id: 2,
    nombre: "Manzanas",
    precio: 3500,
    stock: 14
},
{
    id: 3,
    nombre: "Palta",
    precio: 3000,
    stock: 5
},
{
    id: 4,
    nombre: "Kiwi",
    precio: 1000,
    stock: 3
},
{
    id: 5,
    nombre: "Naranja",
    precio: 1500,
    stock: 424
}
]

productos.push({
    id:6,
    nombre: "Peras",
    precio: 5.000,
    stock: 12
})
productos.pop();
console.log(productos);

//2)
let productosEnStock = productos.filter(function(producto){
    return producto.stock > 10;
})

console.log(productosEnStock);

//3)
const filtrarPorNombre = productos.find((producto) => {
    return producto.nombre == "Kiwi";
})

filtrarPorNombre != undefined ? console.log(filtrarPorNombre) : console.log("Producto no encontrado");

//4)
let precioTotal = productos.reduce((acumulador,producto) => acumulador + producto.precio,0);
console.log("Precio total " + precioTotal);
let calcularPromedio = function(){
    return precioTotal / productos.length;
}
console.log("Promedio " + calcularPromedio())

//5)
let existeConStockCero = productos.some(producto => producto.stock === 0);
console.log("Existen productos con stock 0: " + existeConStockCero);
let todosCuestanMasDeCien = productos.every(producto => producto.precio > 100);
console.log("Todos los productos cuesta mas de 100: " + todosCuestanMasDeCien);

//6)
let clientes = [{
    id: 1,
    nombre: "Manuel",
    edad:20,
    compras: ["Bananas","Kiwis","Manzanas"]
},{
    id: 2,
    nombre: "Odie",
    edad:8,
    compras: ["Pollito","Leche","Carnitas"]
},{
    id: 3,
    nombre: "Ramona",
    edad:1,
    compras: ["Stitch"]
}]

clientes.forEach(cliente => console.log("Cliente: " + cliente.nombre + " Cantidad de compras: " + cliente.compras.length));