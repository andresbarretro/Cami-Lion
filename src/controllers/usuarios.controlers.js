import { dbRegistrarUsuario} from "../service/usuario.service.js";

 const registrarUsuario = async (req, res) => {
    const inputData = req.body;

    const data =await dbRegistrarUsuario(inputData)

    res.json(data);
};

export {
    registrarUsuario
}

