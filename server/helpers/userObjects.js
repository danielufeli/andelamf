import userModel from '../models/userModel';
import db from '../db';

const { createUser, allUser } = userModel;

export default class userObjects {
  static async newUser(hash, req) {
    const values = [
      req.body.email,
      req.body.mobileno,
      req.body.firstname,
      req.body.lastname,
      hash,
      req.body.address,
    ];
    const { rows } = await db.query(createUser, values);
    return rows[0];
  }

  static async allUsers() {
    const { rows } = await db.query(allUser);
    return rows;
  }

  static async userByEmail(uemail) {
    const users = await userObjects.allUsers();
    const currentUser = users.find(v => v.email === uemail);
    return currentUser;
  }

  static async userByMobile(umobile) {
    const users = await userObjects.allUsers();
    const currentUser = users.find(v => v.mobileno === umobile);
    return currentUser;
  }
}
