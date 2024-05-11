import express from 'express';
import { findAll } from '../controller/product.js';

const router = express.Router();

router.get('/', findAll);

export default router;
