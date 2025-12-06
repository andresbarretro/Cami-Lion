// importo el esquema de usuarios

import usuarioModel from "../models/usuarios.model.js"

async function dbRegistrarUsuario(nuevoUsuario){
   return await usuarioModel.create(nuevoUsuario)
}

export {
    dbRegistrarUsuario
}