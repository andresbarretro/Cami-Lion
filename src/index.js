import express from "express";
import usuariosRouter from "./routes/usuarios.route.js";
import authRoute from "./routes/auth.routes.js";
import dbconection from "./config/mongo.config.js";
import productsRouter from "./routes/products.routes.js";


const app = express();

// habilita el uso de json en las peticiones(que la app entienda json)
app.use(express.json());

// invoca la conexion de la base de datos
dbconection()

//ruta para usuarios
app.use("/api/v1/users", usuariosRouter)

//ruta para productos
app.use("/api/v1/products",productsRouter)


//ruta para autenticacion
app.use("/api/v1/auth",authRoute)

// servidor escuchando en el puerto 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

