import express from 'express';
import auth from './src/routes/auth.js';
const app = express();

app.use(express.urlencoded({ extended: true })); //permite ler informações do body

app.use('/auth', auth);

app.use('/teste', (req, res) => {
  res.status(200).json('ola');
});

export default app;
