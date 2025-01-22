import express from 'express'
import { createNewDetails, getAllRecords } from '../controllers/portfolio.controller.js';

const router = express.Router();

//Create new details
router.post('/',createNewDetails);

//Get All Records
router.get('/vimal',getAllRecords)

export default router;