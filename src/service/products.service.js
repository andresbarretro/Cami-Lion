import productoModel from "../models/products.model.js";


async function dbCrearProducto(nuevoProducto){
    return await productoModel.create(nuevoProducto)
};

async function dbObtenerProductos(){
    return await productoModel.find()
};

async function dbObtenerProductoPorId(id){
    return await productoModel.findById(id)
}
async function dbActualizarProductoByID(id,updateData){
    return await productoModel.findByIdAndUpdate(id, updateData, { new: true });
}

export{
    dbCrearProducto,
    dbObtenerProductos,
    dbObtenerProductoPorId,
    dbActualizarProductoByID
}