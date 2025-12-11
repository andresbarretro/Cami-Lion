import resenasModel from '../models/resenas.model.js';
import { dbactualizarResenasPorId, dbdeleteResenasPorId, dbgetResenas, dbregistroResenas } from '../services/resenas.service.js';

const creaResena = async (req, res) =>{

 try{
    const data = req.body;

    console.log(data);

    const dataRegister = await
    dbregistroResenas(data);
    res.json({
        msg:'Reseña creada',
        dataRegister
    });
 }

 catch(error){
    console.error(error);
    res.json({
        msg:'Error no se puede crear la reseña'
    });
 };

}

const getResenas = async (req, res) =>{
    try{

    const resenas = await
    dbgetResenas();
    res.json({
        msg:'obtiene todas las reseñas',
        resenas
    });
    }

   catch (error) {
    console.error(error);
    res.json({
        msg:'Error: no se puedo obtener las reseñas'
    })
   }
}

const deleteResenas =async (req,res) =>{

    try{
        const idResenas = req.params.idResenas;

        const resenasDelet = await
        dbdeleteResenasPorId (idResenas);

        res.json({
            resenasDelet
        });
    }

    catch(error){
        console.error(error);
        res.json({
          msg:'Error no se puso eliminar las reseñas'
        });
    }

}

const actuliazarResenas = async (req,res) =>{
    try{
        const inputData = req.boy;
        const idResenas = req.params.idResenas;

        const resenasUpdate = await
        dbactualizarResenasPorId(idResenas,inputData);

        res.json(
            inputData,
            resenasUpdate
        );
    }

    catch (error) {
        console.error(error);
        res.json({
            msg:'Error no se puedo actualizar la reseña por id'
        })
    }
};

export{
    creaResena,
    getResenas,
    deleteResenas,
    actuliazarResenas
}
