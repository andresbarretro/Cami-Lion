import express from "express";
import usuariosRouter from "./routes/usuarios.route.js";
import dbconection from "./config/mongo.config.js";

const app = express();

// habilita el uso de json en las peticiones(que la app entienda json)
app.use(express.json());

// invoca la conexion de la base de datos
dbconection()

app.use("/api/v1/users", usuariosRouter)

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

