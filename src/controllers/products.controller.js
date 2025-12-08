import { dbActualizarProductoByID, dbCrearProducto, dbDeleteProductoById, dbObtenerProductoPorId, dbObtenerProductos} from "../service/products.service.js";



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

async function obtenerProductosPorID(req, res) {
       
    try {
        const id = req.params.id
        const data = await dbObtenerProductoPorId(id);
        res.json(data)
    
}catch(error) {
        console.error("Error al obtener producto por ID:", error);
        res.status(500).json({ error: "Error al obtener producto por ID" });
    }
}

async function actualizarProductosByID(req,res){

    try{
        const id = req.params.id
        const updateData = req.body;
        const data = await dbActualizarProductoByID(id,updateData)
        res.json(data)
    }catch(error){
        console.error("Error al actualizar producto por ID:", error);
        res.status(500).json({ error: "Error al actualizar producto por ID" });

    }

}


async function borrarProductoByID(req,res){
    const id = req.params.id;
    const data = await dbDeleteProductoById(id);

}



export{
    crearProducto, 
    obtenerProductos,
    obtenerProductosPorID,
    actualizarProductosByID,
    borrarProductoByID
}

