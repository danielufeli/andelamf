import Joi from '@hapi/joi';

const validateTrip = {
  bus_id: Joi.number().min(1).required(),
  origin: Joi.string().required(),
  destination: Joi.string().required(),
  fare: Joi.number().required(),
};

export default validateTrip;
