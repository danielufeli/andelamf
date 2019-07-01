import dotenv from 'dotenv';
import authtok from '../helpers/authok';
import userObjects from '../helpers/userObjects';

const { newUser } = userObjects;
dotenv.config();

class authController {
  static async userSignup(req, res) {
    const hash = authtok.hashPassword(req.body.password);
    try {
      const user = await newUser(hash, req);
      const {
        id, isadmin, firstname, lastname, email,
      } = user;
      const userToken = authtok.generateToken(id, isadmin, email, firstname, lastname);
      res.status(201).json({
        status: 'success',
        data: {
          id, isadmin, token: userToken,
        },
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default authController;
