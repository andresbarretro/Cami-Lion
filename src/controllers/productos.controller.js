import productosModel from "../models/productos.model.js"
import { dbdeleteProductoPorId, dbgetProducto, dbregistroProducto, dbactualizarProductoPorId } from "../services/prodcutos.service.js"


const creaProducto = async (req, res) => {

    try {
        const data = req.body;

        console.log(data);

        const dataRegister = await dbregistroProducto(data);
        res.json({
            msg: 'Producto Creado',
            dataRegister
        });
    }

    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se puede crear el producto deseado'
        });

    };
}

const getProducto = async (req, res) => {
    try {
        const productos = await dbgetProducto();
        res.json({
            msg: 'obtiene todos los productos',
            productos
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error:No se puedo obtener el listado de productos'
        });
    }

}

const deleteProducto = async (req, res) => {
    try {
        const idProducto = req.params.idProducto; //preguntar andres

        const productoDeleted = await dbdeleteProductoPorId(idProducto); //pregunta andres

        res.json({
            productoDeleted
        });
    }

    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se puedo eliminar el producto por Id'
        });
    }

}

const actuliazarProducto = async (req, res) => {
    try {
        const inputData = req.body;
        const idProducto = req.params.idProducto;

        const userUpdate = await dbactualizarProductoPorId(idProducto, inputData);


        res.json(
            inputData,
            userUpdate
        );

    }

    catch (error) {
        console.error(error);
        res.json({
            msg: 'ERROR: No pudo actualizar el producto por Id'
        })
    }

};

export {
    creaProducto,
    getProducto,
    deleteProducto,
    actuliazarProducto
}