import express from 'express'
import { actuliazarCategoria, creaCategoria, deleteCategoria, getCategoria } from '../controllers/categorias.controller.js'

const router = express.Router();

router.post('/',creaCategoria);
router.get('/',getCategoria);
router.delete('/:idCategoria',deleteCategoria);
router.patch('/:idCategoria',actuliazarCategoria);


export default router;


