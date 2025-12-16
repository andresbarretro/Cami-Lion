import { dbGetUsuarioByEmail } from "../service/usuario.service.js";
import { verificarPassword } from "../helpers/bcrypt.helper.js";
import { generarToken } from "../helpers/jwt.helper.js";


const loginUser = async (req, res) => {


    // Lógica para el inicio de sesión
    const inputData = req.body;

    // paso 1: validar que el usuario no exista en la base de datos
    const existingUser = await dbGetUsuarioByEmail(inputData.email);
        if (!existingUser) {
           return res.json({ message: "No se puede iniciar sesión, usuario no encontrado, por favor regístrese primero" });
        }

    // paso 2: comparar la contraseña proporcionada con la almacenada en la base de datos
        const isPasswordValid = verificarPassword(inputData.password, existingUser.password);
        if (!isPasswordValid) {
            return res.json({ message: "Credenciales invalidas" });
        }

    // paso 3: generar un token de autenticación 
        const payload = {
            id: existingUser._id,         // referanciar quien hace que en la aplicacion
            nombre: existingUser.nombre, // o cualquier otro dato que desees incluir en el token
            email: existingUser.email,  //para realizar validaciones en rutas protegidas
            role: existingUser.rol     //para realizar validaciones en rutas protegidas


        }

        const token = generarToken(payload);
       



    // paso 4: eliminar  propiedades sensibles antes de enviar la respuesta
        const jsonexistingUser = existingUser.toObject(); // Convertir el documento de Mongoose a un objeto plano
        delete jsonexistingUser.password; // Eliminar la propiedad 'password'
    // paso 5: enviar la respuesta al cliente
         res.json({ token, user: jsonexistingUser });
};


const reNewToken = async (req, res) => {
    // paso 1: extraer el payload del usuario autenticado desde el middleware
    const payload = req.payload;

    // paso 2: verificar que el usuario al que se le va a generar el token exista en la base de datos
    const existingUser= await dbGetUsuarioByEmail(payload.email);
    if (!existingUser) {
        return res.json({ message: "No se puede renovar el token, usuario no encontrado" });
    }
    // paso 3: generar un nuevo token con el payload actualizado
    const newPayload = {
        id: existingUser._id, // referanciar quien hace que en la aplicacion
        nombre: existingUser.nombre, // puede usar este dato para perzonalizar mensajes

        email: existingUser.email,  //puedo usar este dato para enviar mensajes anonimos entre usuarios de la aplicacion 

        role: existingUser.role    // puedo usar este dato para acceder a las diferentes rutas permisionadas en el FrontEnd

    };

    // paso 4: generar el nuevo token
    const newToken = generarToken(newPayload);

    // paso 5: eliminar propiedades sensibles antes de enviar la respuesta
    const jsonexistingUser = existingUser.toObject();
    //convertir un documento  de mongoDB (BJSON), en un JavaScript Object plano
    delete jsonexistingUser.password;  //Elimina la propiedad "password" del objeto

    // paso 6: enviar la respuesta al cliente
    res.json({ token: newToken, user: jsonexistingUser });
    
    
}


export { loginUser,
    reNewToken
 };

