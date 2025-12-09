import express from 'express'
import { creaProducto, deleteProducto, getProducto } from '../controllers/productos.controller';

const router = express.Router(); //preguntar andres


router.post( '/', creaProducto);
router.get('/',getProducto);
router.delete('/:idProducto',deleteProducto);








export default Router;