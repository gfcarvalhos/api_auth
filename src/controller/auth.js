import userModel from '../models/user.js';

const autheticate = (req, res) => {
  const user = userModel(req.params);

  if (user.username == 'gabriel' && user.password == '123') {
    return res.status(200).json({ message: 'usuário autenticado' });
  }
  return res.status(401).json({ message: 'usuário não autenticado' });
};

export { autheticate };
