import {Router} from "express";
import { registrarUsuario } from "../controllers/usuarios.controlers.js";
import { loginUser } from "../controllers/auth.congtroller.js";

const router = Router();

// se definen las rutas de autenticacion aqui

router.post("/login",loginUser);
router.post("/register",registrarUsuario);
// router.get("/renue-token",);

export default router;