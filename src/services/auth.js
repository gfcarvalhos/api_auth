import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { BadRequest, Unauthorized } from './exceptions/httpRequestError.js';

dotenv.config();

/**
 * Autentica o usuario e senha e retorna um token
 * @param {Object} user
 * @returns Token
 */
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

/**
 * Verifica se o token é válido
 * @param {Object} headers
 * @returns String
 */
const autheticated = (headers) => {
  try {
    const authorization = headers.authorization;
    const token = authorization.split(' ')[2];

    const decoded = jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        throw new Unauthorized('Token inválido');
      }
      return decoded;
    });

    return decoded.username;
  } catch (erro) {
    throw new Unauthorized(erro.message || 'Header inválido');
  }
};

export { authenticate, autheticated };
