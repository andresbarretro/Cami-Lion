import express from 'express'
import {actuliazarResenas, creaResena, deleteResenas, getResenas} from '../controllers/resenas.controller.js'

const router = express.Router();

router.post('/',creaResena);
router.get('/',getResenas);
router.delete('/:idResenas',deleteResenas);
router.patch('/:idResenas',actuliazarResenas);

export default router;