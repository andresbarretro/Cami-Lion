
import express from "express";
import dbconection from "./config/mongo.config.js";
import usuariosRouter from "./routes/usuarios.route.js";
import authRoute from "./routes/auth.routes.js";
import productsRouter from "./routes/products.routes.js";
import categoriasRoutes from './routes/categorias.routes.js';
import resenasRoutes from './routes/resenas.routes.js';


const app = express();
const PORT = 3000;
// invoca la conexion de la base de datos
dbconection();

// habilita el uso de json en las peticiones(que la app entienda json)
app.use(express.json());


app.use("/api/v1/users", usuariosRouter)
app.use("/api/v1/products",productsRouter)
app.use('/api/v1/categorias', categoriasRoutes);
app.use('/api/v1/resenas',resenasRoutes);
app.use("/api/v1/auth",authRoute)

// servidor escuchando en el puerto 3000
app.listen(PORT, () => {
  console.log(`serve runnig on http://localhost:${PORT}`);
});


