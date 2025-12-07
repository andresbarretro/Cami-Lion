import express from "express";
import usuariosRouter from "./routes/usuarios.route.js";
import dbconection from "./config/mongo.config.js";
import productsRouter from "./routes/products.routes.js";


const app = express();

// habilita el uso de json en las peticiones(que la app entienda json)
app.use(express.json());

// invoca la conexion de la base de datos
dbconection()

//ruta para usuarios
app.use("/api/v1/users", usuariosRouter)


app.use("/api/v1/products",productsRouter)

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

