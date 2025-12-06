import { dbRegistrarUsuario, dbGetUsuarios, dbGetUsuarioById, dbDeleteUsuarioById} from "../service/usuario.service.js";

 const registrarUsuario = async (req, res) => {

    try {
        const inputData = req.body;
    
        const data =await dbRegistrarUsuario(inputData)
    
        res.json(data);
        
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ error: "Error al registrar usuario" });
    }
};

const getUsuarios = async (req, res) => {

    try {
        const data = await dbGetUsuarios();
        res.json(data);
        
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error al obtener usuarios" });
        
        
    }

};

const getUsuarioById = async (req, res) => {
    try { 
        const id = req.params.id;
        const data = await dbGetUsuarioById(id);
        res.json(data);

    } catch (error) {
        console.error("Error al obtener usuario por ID:", error);
        res.status(500).json({ error: "Error al obtener usuario por ID" });

    }
}

const deleteUsuarioById = async (req, res) => {
    try { 
        const id = req.params.id;
        const data = await dbDeleteUsuarioById(id);
        res.json(data);

    } catch (error) {
        console.error("Error al borrar usuario por ID:", error);
        res.status(500).json({ error: "Error al borrar usuario por ID" });

    }
}





export {
    registrarUsuario,
    getUsuarios,
    getUsuarioById,
    deleteUsuarioById
}

