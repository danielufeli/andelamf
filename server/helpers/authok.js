
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const authtok = {
  hashPassword(req) {
    return bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  },

  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  // eslint-disable-next-line camelcase
  generateToken(user_id, is_admin, email, first_name, last_name) {
    const token = jwt.sign({
      userid: user_id, admin: is_admin, uemail: email, fname: first_name, lname: last_name,
    }, process.env.jwtPrivateKey);
    return token;
  },
};
export default authtok;
