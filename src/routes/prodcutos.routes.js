import express from 'express'
import { actuliazarProducto, creaProducto, deleteProducto, getProducto } from '../controllers/productos.controller.js';

const router = express.Router(); //preguntar andres


router.post( '/', creaProducto);
router.get('/',getProducto);
router.delete('/:idProducto',deleteProducto);
router.patch('/:idProducto',actuliazarProducto);







export default router;