import { autheticated } from '../services/auth.js';

const findAll = (req, res) => {
  try {
    autheticated(req.headers);
    return res.status(200).json({ message: 'sucesso' });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || 'Internal Error' });
  }
};

export { findAll };
