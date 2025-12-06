import express from "express";
import { registrarUsuario } from "../controllers/usuarios.controlers.js";


const router = express.Router();

// se define las rutas para la entidad usuarios 
router.post("/", registrarUsuario); 

export default router;
