import express from "express";
import { actualizarProductosByID, crearProducto, obtenerProductos, obtenerProductosPorID } from "../controllers/products.controller.js";

 
const router = express.Router();

// ruta para crear un nuevo producto
router.post("/", crearProducto);
router.get("/", obtenerProductos);
router.get("/:id", obtenerProductosPorID);
router.patch("/:id", actualizarProductosByID);





export default router;

