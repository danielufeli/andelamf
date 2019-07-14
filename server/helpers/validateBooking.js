import Joi from '@hapi/joi';

const validateBooking = {
  trip_id: Joi.number().min(1).required(),
  user_id: Joi.number().min(1).required(),
  seat_number: Joi.number().min(1).required(),
};

export default validateBooking;
