// importo el esquema de usuarios

import usuarioModel from "../models/usuarios.model.js"

async function dbRegistrarUsuario(nuevoUsuario){
   return await usuarioModel.create(nuevoUsuario)
}

async function dbGetUsuarios(){
    return await usuarioModel.find()
}








export {
    dbRegistrarUsuario,
    dbGetUsuarios
}