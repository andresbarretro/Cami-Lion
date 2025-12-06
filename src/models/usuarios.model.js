import {Schema, model} from 'mongoose'; 

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    direccion: {
        type: String,
        trim: true,
    },
    telefono: {
        type: Number,
        trim: true,
        required: true,
        minLength:9,
        // maxLength:10,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        // maxLength: 14,
    },
    rol: {
        type: String,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
        default: 'USER_ROLE',
    },
    estado: {
        type: Boolean,
        default: true,
    },
    
},{
    timestamps: true,
    versionKey: false,
    
});

// Exportar el modelo de Usuario
const usuarioModel = model('Usuario', usuarioSchema);

export default usuarioModel;


