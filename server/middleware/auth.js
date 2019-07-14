import jwt from 'jsonwebtoken';
import userObjects from '../helpers/userObjects';

const { getCurrentUser } = userObjects;

export default class auth {
  static async verifyToken(req, res, next) {
    try {
      const token = req.headers['x-auth-token'];
      if (!token) { res.status(401).json({ status: 'error', error: 'Your token is missing' }); }
      const decoded = await jwt.verify(token, process.env.jwtPrivateKey);
      const {
        userid, admin, uemail, fname, lname,
      } = decoded;
      const user = await getCurrentUser('user_id', userid);
      if (!user) { res.status(401).json({ status: 'error', error: 'Your token is invalid' }); }
      req.user = {
        token,
        user_id: userid,
        is_admin: admin,
        email: uemail,
        first_name: fname,
        last_name: lname,
      };
      next();
    } catch (error) {
      res.status(401).json({ status: 'error', error: 'Your token is invalid' });
      next(error);
    }
  }
}
