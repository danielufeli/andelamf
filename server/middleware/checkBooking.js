import userObjects from '../helpers/userObjects';
import authtok from '../helpers/authok';

const { getCurrentUser } = userObjects;

export default class checkUserEmail {
  static async checkEmailSignin(req, res, next) {
    try {
      const user = await getCurrentUser('email', req.body.email);
      if (!user) { return res.status(401).json({ status: 401, message: 'Your email is incorrect' }); }
      if (!authtok.comparePassword(user.password, req.body.password)) { return res.status(401).json({ status: 401, message: 'Your password is incorrect' }); }
      return next();
    } catch (error) { return next(error); }
  }
}
