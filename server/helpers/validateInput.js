import Joi from '@hapi/joi';

const validateInput = {
  signupInput: {
    first_name: Joi.string().trim().min(2).max(50)
      .required(),
    last_name: Joi.string().trim().min(2).max(50)
      .required(),
    password: Joi.string().trim().min(6).max(255)
      .required(),
    email: Joi.string().trim().min(4).max(255)
      .required()
      .email(),
  },
  signinInput: {
    email: Joi.string().trim().min(4).max(255)
      .required()
      .email()
      .error(() => ({ message: 'Enter a valid email to signin' })),
    password: Joi.string().trim().min(6).max(255)
      .required()
      .error(() => ({ message: 'Enter a valid password to signin' })),
  },
  validateTrip: {
    bus_id: Joi.number().required(),
    origin: Joi.string().trim().required(),
    destination: Joi.string().trim().required(),
    trip_date: Joi.date().required(),
    fare: Joi.number().min(1).required(),
  },
  validateBooking: {
    trip_id: Joi.number().min(1).required(),
  },
};

export default validateInput;
