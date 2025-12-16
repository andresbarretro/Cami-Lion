import jwt  from "jsonwebtoken";

const generarToken = (payload) => {
   try{
    return jwt.sign(
        payload,                    // carga util
        "claveSecreta",            //Semilla (palabra secreta)
       {expiresIn: "1h"}
   )} catch(error){
        console.error(error);
        return null;
   }

}
   const validarToken = (token)=>{
    try{
        return jwt.verify(token,"claveSecreta");
    } catch(error){
        console.error(error);
        return null;
    }
   }


export {
    generarToken,
    validarToken

}


