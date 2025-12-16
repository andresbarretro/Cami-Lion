import { encriptarPassword } from "../helpers/bcrypt.helper.js";
import { dbRegistrarUsuario, dbGetUsuarios, dbGetUsuarioById, dbDeleteUsuarioById, dbUpdateUsuarioById, dbGetUsuarioByEmail} from "../service/usuario.service.js";

 const registrarUsuario = async (req, res) => {

    try {
        //Pasi 1 :traer la informacion del body
        const inputData = req.body;

        // paso 2: validar que el usuario no exista en la base de datos
        const existingUser = await dbGetUsuarioByEmail(inputData.email);
        if (existingUser) {
           return res.json({ message: "El usuario ya existe" });
        }
        // paso 3: encriptar la contraseña antes de guardarla en la base de datos
        inputData.password = encriptarPassword(inputData.password);
            console.log("Password encriptado:", inputData);
        // paso 4: registrar el usuario en la base de datos
        const data =await dbRegistrarUsuario(inputData)
        
        // paso 5: eliminar la propiedad password antes de enviar la respuesta  
        const jsondata = data.toObject(); // Convertir el documento de Mongoose a un objeto plano
        delete jsondata.password; // Eliminar la propiedad 'password'
    
    res.json({user: jsondata});

        
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
};

const deleteUsuarioById = async (req, res) => {
    try { 
        const id = req.params.id;
        const data = await dbDeleteUsuarioById(id);
        res.json(data);

    } catch (error) {
        console.error("Error al borrar usuario por ID:", error);
        res.status(500).json({ error: "Error al borrar usuario por ID" });

    }
};


const updateUsuarioById = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;
        const data = await dbUpdateUsuarioById(id,inputData);
        res.json(data);


    }catch (error) {
        console.error("Error al actualizar usuario por ID:", error);
        res.status(500).json({ error: "Error al actualizar usuario por ID" });
    }
}




export {
    registrarUsuario,
    getUsuarios,
    getUsuarioById,
    deleteUsuarioById,
    updateUsuarioById
}

