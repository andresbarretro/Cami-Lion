import express, { Router } from 'express';
import dbconeccion from './config/mongo.config.js';
import productosRoutes from './routes/prodcutos.routes.js';


const app = express(); //ahora expreess esta dentro de la constatnte app
const PORT = 3000;

dbconeccion();


app.use(express.json());
app.use('/api/v1/prodcutos',  productosRoutes);


app.listen(PORT, () =>{
    console.log( `serve runnig on htttp://localhost:${PORT}` )
}
);

















