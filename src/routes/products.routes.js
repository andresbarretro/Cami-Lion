import express from "express";
import { crearProducto, obtenerProductos } from "../controllers/products.controller.js";

 
const router = express.Router();

// ruta para crear un nuevo producto
router.post("/", crearProducto);
router.get("/", obtenerProductos);



export default router;

