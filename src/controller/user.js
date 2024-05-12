import * as userService from '../services/user.js';
import { autheticated } from '../services/auth.js';

const findAll = async (req, res) => {
  try {
    autheticated(req.headers);
    const users = await userService.findAll();

    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || 'Internal Error' });
  }
};

const create = async (req, res) => {
  try {
    autheticated(req.headers);
    const user = req.body;
    await userService.create(user);

    return res.status(201).json({ message: 'user created successfully' });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || 'Internal Error' });
  }
};

const update = async (req, res) => {
  try {
    autheticated(req.headers);

    return res.status(201).json({ message: 'user created successfully' });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || 'Internal Error' });
  }
};

const remove = async (req, res) => {
  try {
    autheticated(req.headers);

    return res.status(201).json({ message: 'user created successfully' });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || 'Internal Error' });
  }
};

export { findAll, create, update, remove };
