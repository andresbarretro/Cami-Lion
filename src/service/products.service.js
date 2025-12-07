import productoModel from "../models/products.model.js";


async function dbCrearProducto(nuevoProducto){
    return await productoModel.create(nuevoProducto)
};

async function dbObtenerProductos(){
    return await productoModel.find()
};



export{
    dbCrearProducto,
    dbObtenerProductos
}