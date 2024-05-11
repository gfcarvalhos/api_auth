import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { BadRequest, Unauthorized } from './exceptions/httpRequestError.js';

dotenv.config();

const authenticate = (user) => {
  if (user.username != 'gabriel' || user.password != '123') {
    throw new Unauthorized('Usuário não está autenticado');
  }
  return generateToken(user.username);
};

const generateToken = (username) => {
  return jwt.sign({ username: username }, process.env.SECRET, {
    expiresIn: 10000,
  });
};

export { authenticate };
