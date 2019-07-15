import Joi from '@hapi/joi';

const validateTrip = {
  bus_id: Joi.required(),
  origin: Joi.string().required(),
  destination: Joi.string().required(),
  trip_date: Joi.date().required(),
  fare: Joi.number().min(1).required(),
};

export default validateTrip;
