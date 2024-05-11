import express from 'express';
import { autheticate } from '../controller/auth.js';

const router = express.Router();

router.get('/:username/:password', autheticate);

router.post('/', (req, res) => {
  res.status(200).json({ message: 'rota autenticação post' });
});

router.delete('/', (req, res) => {
  res.status(200).json({ message: 'rota autenticação delete' });
});

router.put('/', (req, res) => {
  res.status(200).json({ message: 'rota autenticação put' });
});

export default router;
