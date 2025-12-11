import categoriasModel from "../models/categorias.model.js"



const dbregistroCategoria = async (newCategoria) => {
    return await categoriasModel.create(newCategoria);
}

const dbgetCategoria = async () => {
    return await categoriasModel.find();
}

const dbdeleteCategoriaPorId = async (_id) =>{
    return await categoriasModel.findOneAndDelete({_id});
}

const dbactualizarCategoriaPorId = async (_id,inputData) => {

    return await categoriasModel.findByIdAndUpdate(
        _id,
        inputData,
        {new: true}
    );
}


export {
    dbregistroCategoria,
    dbgetCategoria,
    dbdeleteCategoriaPorId,
    dbactualizarCategoriaPorId
}