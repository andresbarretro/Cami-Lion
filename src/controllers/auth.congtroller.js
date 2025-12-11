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





export { loginUser };
