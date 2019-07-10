import userModel from '../models/userModel';
import authtok from './authok';
import dbObjects from './dbObjects';

const { selectQuery } = dbObjects;
const { allUser } = userModel;
const { generateToken } = authtok;

export default class userObjects {
  static async getCurrentUser(key, value) {
    const users = await selectQuery(allUser);
    const currentUser = users.find(user => user[key] === value);
    return currentUser;
  }

  static generateUserToken(user) {
    const {
      // eslint-disable-next-line camelcase
      user_id, first_name, last_name, email, is_admin,
    } = user;
    const userToken = generateToken(user_id, is_admin, email, first_name, last_name);
    const data = { user_id, is_admin, token: userToken };
    return data;
  }
}
