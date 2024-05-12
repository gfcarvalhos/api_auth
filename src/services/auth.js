import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { BadRequest, Unauthorized } from './exceptions/httpRequestError.js';
import { get } from '../database/entities/user.js';

dotenv.config();

/**
 * Autentica o usuario e senha e retorna um token
 * @param {Object} user
 * @returns Token
 */
const authenticate = async (user) => {
  const [result] = await get(user.username, user.password);

  if (!result) {
    throw new Unauthorized('Usuário não está autenticado');
  }
  return generateToken(user.username);
};

const generateToken = (username) => {
  return jwt.sign({ username: username }, process.env.SECRET, {
    expiresIn: 1200,
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
    const token = authorization.split(' ')[1];

    const decoded = jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        throw new Unauthorized('Token inválido');
      }
      return decoded;
    });

    return decoded.username;
  } catch (erro) {
    throw new Unauthorized('Token inválido');
  }
};

export { authenticate, autheticated };
