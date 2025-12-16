import {validarToken} from "../helpers/jwt.helper.js";
const authUser = (req, res, next) => {
    // Paso 1:extraer el token del header de la solicitud
    const token = req.header("x-auth-token");
    // Paso 2: verificar si el token existe
    if (!token){
        return res.json({message: "No se proporcionó token de autenticación"});
    }
   // Paso 3: Extraer el payload del token
   const payload = validarToken(token);

   // paso 4: Eliminar propiedades sensibles del payload

   delete payload.iat; // elimina la propiedad "iat" (issued at)
   delete payload.exp; // elimina la propiedad "exp" (expiration time)


   // paso 5: enviar el payload a traves del objeto req al siguiente middleware o controlador
    req.payload = payload;

    // paso 6: llamar a next() para pasar al siguiente middleware o controlador
    next();

};








export {authUser};