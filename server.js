import express from 'express';
import auth from './src/routes/auth.js';
import product from './src/routes/product.js';
const app = express();

app.use(express.urlencoded({ extended: true })); //permite ler informações do body

app.use('/auth', auth);
app.use('/product', product);

app.use('/teste', (req, res) => {
  res.status(200).json('ola');
});

export default app;
