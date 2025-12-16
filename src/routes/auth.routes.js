import {Router} from "express";
import { registrarUsuario } from "../controllers/usuarios.controlers.js";
import { loginUser, reNewToken } from "../controllers/auth.congtroller.js";
import { authUser } from "../middlerwares/auth.mid.js";
import { autorizacion } from "../middlerwares/autorizacion.mid.js";

const router = Router();

// se definen las rutas de autenticacion aqui

router.post("/login",loginUser);
router.post("/register",registrarUsuario);
router.get("/renewtoken",authUser,autorizacion,reNewToken);


export default router;