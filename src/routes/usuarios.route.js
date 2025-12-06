import express from "express";
import { getUsuarios, registrarUsuario } from "../controllers/usuarios.controlers.js";


const router = express.Router();

// se define las rutas para la entidad usuarios 
router.post("/", registrarUsuario); 
router.get("/",getUsuarios)



export default router;
