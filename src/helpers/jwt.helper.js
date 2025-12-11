import jwt  from "jsonwebtoken";

const generarToken = (payload) => {
   return jwt.sign(
        payload,                    // carga util
        "claveSecreta",            //Semilla (palabra secreta)
       {expiresIn: "1h"}
   )};
    
                                  // opciones de configuracion del token





export {
    generarToken

};
