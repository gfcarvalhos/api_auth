import { BadRequest, Unauthorized } from './exceptions/httpRequestError.js';

const authenticate = (user) => {
  if (user.username != 'gabriel' || user.password != '123') {
    throw new Unauthorized('Usuário não está autenticado');
  }
  return 'token';
};

export default authenticate;
