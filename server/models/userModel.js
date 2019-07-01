const userModel = {
  createUser: `INSERT INTO 
    users(email, mobileno, firstname, lastname, password, address)
    values($1, $2, $3, $4, $5, $6)
    returning *`,
  allUser: 'SELECT * FROM users',
};

export default userModel;
