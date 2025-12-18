import bcrypt from 'bcrypt';

const encriptarPassword =  (passwordUsuario) => {
    const salt = bcrypt.genSaltSync();
    console.log(salt);

    const hash = bcrypt.hashSync(passwordUsuario, salt);
    return hash;
};

const verificarPassword =  (originalpassword,hash) => {
    try{
        const isValid = bcrypt.compareSync(originalpassword, hash);
        return isValid;
    }catch(error){
        console.error("Error al verificar la contraseña:", error);
        return null;
};
};






export {
     encriptarPassword,
     verificarPassword 
    };
