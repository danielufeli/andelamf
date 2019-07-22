import dotenv from 'dotenv';
import dataObjects from '../helpers/dataObjects';
import userObjects from '../helpers/userObjects';
import userModel from '../models/userModel';
import authtok from '../helpers/authok';

const { generateUserToken, getCurrentUser } = userObjects;
const { newUser } = dataObjects;
const { hashPassword } = authtok;
const { createUser } = userModel;
dotenv.config();

class authController {
  static async userSignup(req, res) {
    try {
      req.body.password = hashPassword(req);
      const user = await newUser(req, createUser);
      const data = generateUserToken(user);
      res.status(201).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }

  static async userSignin(req, res) {
    try {
      const user = await getCurrentUser('email', req.body.email.trim());
      const data = generateUserToken(user);
      return res.status(200).json({ status: 'success', data });
    } catch (error) { return res.status(500).json(error); }
  }
}

export default authController;
