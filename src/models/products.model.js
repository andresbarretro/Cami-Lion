import { Schema, model } from "mongoose";

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
    descripcion: {
    type: String,
    trim: true,
  },
    precio: {  
    type: Number,
    required: true,
    min: 0,
    },
    categoria: {
    type: String,
    trim: true,
    required: true,
    enum: ['Camisetas', 'TOYS', 'mugs', 'Posters', 'Stickers'],
    },
    stock: {
    type: Number,
    required: true,
    min: 1
    },
    estado: {
    type: Boolean,
    default: true,
    },
}, {
  timestamps: true,
  versionKey: false,
});

// Exportar el modelo de Producto
const productoModel = model("Productos", productoSchema);
export default productoModel;
