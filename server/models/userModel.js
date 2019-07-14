const userModel = {
  createUser: `INSERT INTO 
    users(first_name, last_name, password, email)
    values($1, $2, $3, $4)
    returning *`,
  allUser: 'SELECT * FROM users',
  getUserById: 'SELECT * FROM users WHERE id = $1',
};

export default userModel;
