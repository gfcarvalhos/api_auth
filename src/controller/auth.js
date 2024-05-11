import userModel from '../models/user.js';
import userService from '../services/userService.js';

const autheticate = (req, res) => {
  try {
    const user = userModel(req.params);
    const token = userService(user);
    return res.status(200).json({ token: token });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || 'Internal Error' });
  }
};

export { autheticate };
