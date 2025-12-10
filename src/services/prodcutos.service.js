import productosModel from "../models/productos.model.js"

const dbregistroProducto = async (newProducto) => {
    return await productosModel.create(newProducto);
}

const dbgetProducto = async () =>{
   return await productosModel.find();
}

const dbdeleteProductoPorId = async (_id) => {
   return await productosModel.findOneAndDelete({ _id });

}

const dbactualizarProductoPorId = async (_id,inputData) => {
      
   return await productosModel.findByIdAndUpdate(
        _id,
        inputData,
        {new: true}
    );
}



export{
    dbregistroProducto,
    dbgetProducto,
    dbdeleteProductoPorId,
    dbactualizarProductoPorId
}
