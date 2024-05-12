import * as userEntity from '../database/entities/user.js';
import { Unauthorized } from './exceptions/httpRequestError.js';

const findAll = async () => {
  const [...result] = await userEntity.findAll();
  if (!result.length) {
    throw new Unauthorized('Não há usuarios registrados');
  }

  return result;
};

const create = async (user) => {
  const [result] = await userEntity.create(user);
  if (!result) {
    throw new Unauthorized('Usuário não autenticado');
  }

  return result;
};

export { create, findAll };
