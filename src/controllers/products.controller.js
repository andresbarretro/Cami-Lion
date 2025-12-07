import { dbCrearProducto, dbObtenerProductos} from "../service/products.service.js";



async function crearProducto(req, res){

    try{
        const nuevoProducto = req.body;
        const productoCreado = await dbCrearProducto(nuevoProducto);

        res.json(productoCreado);

    }catch(error){
        console.error("Error al crear producto:", error);
        res.status(500).json({ error: "Error al crear producto" });
    }
}

async function obtenerProductos(req, res){

    try{

        const productos = await dbObtenerProductos();
        res.json(productos);

    }catch(error){
        console.error("Error al obtener productos:", error);
        res.status(500).json({ error: "Error al obtener productos" });
    }
}



export{
    crearProducto, 
    obtenerProductos
}
