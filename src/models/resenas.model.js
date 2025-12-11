import { Schema, model } from "mongoose";

const resenasSchema = new Schema ({
  usuario: { 
    type: Schema.Types.ObjectId,  //preguntar profe o andres
    ref: 'User', 
    required: true 
},
  producto: { type: Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
},
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: true },
  
    comentario:{
        type:String,
        min:10
    }
},{timestamps:true} //con esto se crea un espacio con la hora y fecha de creacion o actualizacion
);

const resenasModel = model(
    'reseñas',
    resenasSchema
);
   
export default resenasModel; 