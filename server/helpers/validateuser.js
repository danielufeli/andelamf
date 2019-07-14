import Joi from '@hapi/joi';

const validateUser = {
  first_name: Joi.string().min(2).max(50).required(),
  last_name: Joi.string().min(2).max(50).required(),
  password: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(4).max(255).required()
    .email(),
};

export default validateUser;
