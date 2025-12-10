// importo el esquema de usuarios

import usuarioModel from "../models/usuarios.model.js"

async function dbRegistrarUsuario(nuevoUsuario){
   return await usuarioModel.create(nuevoUsuario)
}

async function dbGetUsuarios(){
    return await usuarioModel.find()
}


async function dbGetUsuarioById(id){
    return await usuarioModel.findById(id)
}

async function dbGetUsuarioByEmail(email){
    return await usuarioModel.findById(email)
}
async function dbDeleteUsuarioById(id){
    return await usuarioModel.findByIdAndDelete(id)
}

async function dbUpdateUsuarioById(id, updateData){
    return await usuarioModel.findByIdAndUpdate(id,updateData,{new:true})
}



export {
    dbRegistrarUsuario,
    dbGetUsuarios,
    dbGetUsuarioById,
    dbDeleteUsuarioById,
    dbGetUsuarioByEmail,
    dbUpdateUsuarioById
}