import { dbRegistrarUsuario, dbGetUsuarios} from "../service/usuario.service.js";

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







export {
    registrarUsuario,
    getUsuarios
}

