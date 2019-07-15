const userInfo = {
  signup: {
    email: 'danino_001@yahoo.com',
    first_name: 'John',
    last_name: 'Smith',
    password: 'Domi@2019',
  },
  user: {
    email: 'user1@wayfarer.com',
    password: 'Domi@2019',
  },
  adminUser: {
    email: 'admin@wayfarer.com',
    password: 'Domi@2019',
  },
  user2: {
    email: 'kelly@gmail.com',
    password: 'Domi@2019',
  },
  signupEmailOmitted: {
    email: '',
    first_name: 'Daniel',
    last_name: 'Ufeli',
    password: 'Domi@2019',
  },
  invalidEmail: {
    email: 'daniel:daniel.com',
    first_name: 'Daniel',
    last_name: 'Ufeli',
    password: 'Domi@2019',
  },
  ommitedFirstname: {
    email: 'danino_001@yahoo.com',
    first_name: '',
    last_name: 'Ufeli',
    password: 'Domi@2019',
  },
  ommitedLastname: {
    email: 'daniel@daniel.com',
    first_name: 'Daniel',
    last_name: '',
    password: 'Dom@2019',
  },
  ommitedPassword: {
    email: 'daniel@daniel.com',
    first_name: 'Daniel',
    last_name: 'Ufeli',
    password: '',
  },
  ommitedAddress: {
    email: 'daniel@daniel.com',
    mobileno: '08082205956',
    first_name: 'Daniel',
    last_name: 'Ufeli',
    password: 'Domi@2019',
    address: '',
  },
  pass: {
    password: 'Domi@2019',
  },
  email: {
    email: 'danino_001@yahoo.com',
  },
  invalidUser: {
    email: 'danielufeliyahoo.com',
    password: 'Domi@2019',
  },
  invalidpassword: {
    email: 'danielufeliyahoo.com',
    password: 'd',
  },
};

export default userInfo;
