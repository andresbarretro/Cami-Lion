import resenasModel from '../models/resenas.model.js'

const dbregistroResenas = async (newResena) => {
    return await resenasModel.create(newResena);
}

const dbgetResenas = async () =>{
    return await resenasModel.find();
}

const dbdeleteResenasPorId = async (_id) =>{

    return await resenasModel.finOneAndDelete({_id});
    
}

const dbactualizarResenasPorId = async(_id,inputData) =>{
    return await resenasModel.findByIdAndUpdate(
        _id,
        inputData,
        {new: true}
    );
}


export{
    dbregistroResenas,
    dbgetResenas,
    dbdeleteResenasPorId,
    dbactualizarResenasPorI
    }