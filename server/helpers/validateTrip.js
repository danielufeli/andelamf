import Joi from '@hapi/joi';

const validateTrip = {
  origin: Joi.string().required(),
  destination: Joi.string().required(),
  fare: Joi.number().required(),
};

export default validateTrip;
