import productosModel from "../models/productos.model.js"
import { dbdeleteProductoPorId, dbgetProducto, dbregistroProducto } from "../services/prodcutos.service.js"


const creaProducto = async ( req, res ) => {
    try{
    const data = req.body;

 
    console.log(data);

   
    
    const dataRegister = await dbregistroProducto( data ); 
    res.json({ msg: 'Producto Creado',
        dataRegister 
    });
}

catch (error){
    console.error(error);
    res.json({
        msg:'Error no se puede crear el producto'
    });

};
};

const getProducto = async (req, res) => {
     try {
    const producto = await dbgetProducto ();
    res.json({
        msg:'obtiene todos los productos',
        users
    });
}
catch (error){
    console.error( error );
    res.json({
        msg:'Error:No se puedo obtener el listado de productos'
    });
}

}

const deleteProducto = async (req, res) => {
    try{
    const idProducto = req.params.idProducto; //preguntar andres

    const productoDeleted = await dbdeleteProductoPorId( idUser ); //pregunta andres

    res.json({
        productoDeleted
    });
}

catch(error){
    console.error(error);
    res.json({
        msg:'Error no se puedo eliminar el producto por Id'
    });
}

}


export{
    creaProducto,
    getProducto,
    deleteProducto
}