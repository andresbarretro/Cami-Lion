const autorizacion = (req, res, next    ) => {
    console.log("Autenticando usuario...");
    next();
};


export {autorizacion};      