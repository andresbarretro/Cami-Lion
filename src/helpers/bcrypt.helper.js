import bcrypt from 'bcrypt';

const encriptarPassword =  (passwordUsuario) => {
    const salt = bcrypt.genSaltSync();
    console.log(salt);

    const hash = bcrypt.hashSync(passwordUsuario, salt);
    return hash;
};

const verificarPassword =  (originalpassword,hash) => {
    return bcrypt.compareSync(originalpassword, hash);
};






export {
     encriptarPassword,
     verificarPassword 
    };
