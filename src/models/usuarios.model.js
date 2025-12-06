import {Schema, model} from 'mongoose'; 

const usuariosSchema = new Schema({
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
        minlength:9,
        maxlength:10,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 14,
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
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true,
    creadoEn:{type: Date, default: Date.now}
});

// Exportar el modelo de Usuario
const usuarioModel = model('Usuario', usuariosSchema);

export default usuarioModel;


