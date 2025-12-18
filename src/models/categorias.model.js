import { Schema, model } from "mongoose";

const categoriasSchema = new Schema ({
    nombre:{
        type:String,
        required:true
    },
    slug:{
        type: String,
        required: true,
        unique: true 
    }
},
{timestamps:true}); //el {timestamps:true} sirve para que se cree un campo donde se vea la hora y fecha de creado o actualizacion

const categoriasModel = model (
    'categorias',
    categoriasSchema
);
export default categoriasModel;