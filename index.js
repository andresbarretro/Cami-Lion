import exprees, { Router } from 'express';
import dbconeccion from './src/config/mongo.config';
import productosRoutes from './src/routes/prodcutos.routes.js'


const app = exprees(); //ahora expreess esta dentro de la constatnte app
const PORT = 3000;

dbconeccion();


app.use(exprees.json());
app.use('/api/v1/prodcutos',productosRoutes);


app.listen(PORT, () =>{
    console.log( `serve runnig on htttp://localhost:${PORT}` )
}
);

















