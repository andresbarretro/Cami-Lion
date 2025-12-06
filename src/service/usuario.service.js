// importo el esquema de usuario
import usuarioModel from '../models/usuarios.model.js';

const createUsuario = async (data) => {
    return await usuarioModel.create(data);
};

const getUsiarios = async () =>{
    return await usuarioModel.find(); // find: se usa para buscar todos los tados de la coleccion
};

const getUsiariosById = async (_id) =>{
    return await usuarioModel.findOne({_id});

};

const deleteClienteById = async (_id) => {
    return usuarioModel.findOneAndDelete({_id});
};

const updateUsuarioById = async () =>{
    return usuarioModel.findByIdAndUpdate(
        _id,
        inputData,
        {new: true}
    );
};

export {
    createUsuario,
    getUsiarios,
    getUsiariosById,
    deleteClienteById,
    updateUsuarioById
};
