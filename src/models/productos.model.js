import {Schema, model} from "mongoose";

   const prodcutosSchema = new Schema ({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    descripcion:{
        type:String,
        required:true,
        unique:true
    }, 
    precio:{
        type:Number,
        required:true,
    },
    talla:{
        type:String,
        required:true
    },
    imagenes:{type:String},
    categoria:{
        type:String,
        required:true,
        enum:['camisa','gorra','posillo'],
        default:'camisa'
    },
    stock:{
        type:Number
    }
},{versionKey: false,
    timestamps: true}
);

const prodcutosModel = model(
    'productos', //con esto se nombra la base de datos
    prodcutosSchema  
);

export default prodcutosModel;

