import express from "express";
import { getUsuarioById, getUsuarios, registrarUsuario } from "../controllers/usuarios.controlers.js";


const router = express.Router();

// se define las rutas para la entidad usuarios 
router.post("/", registrarUsuario); 
router.get("/",getUsuarios)
router.get("/:id", getUsuarioById);


export default router;
