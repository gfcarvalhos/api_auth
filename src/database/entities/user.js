import connection from '../connections/knex.js';

const get = async (username, password) => {
  return await connection('db_user')
    .select('*')
    .where({ username: username, password: password });
};

export { get };
