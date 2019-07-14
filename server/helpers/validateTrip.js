import Joi from '@hapi/joi';

const validateTrip = {
  bus_id: Joi.number().min(1).required(),
  origin: Joi.string().min(2).max(50).required(),
  destination: Joi.string().min(2).max(255).required(),
  trip_date: Joi.date().required()
    .error(() => ({ message: 'Trip date is invalid, enter date in this formt(YYYY-MM-DD)' })),
  fare: Joi.number().min(2).required(),
};

export default validateTrip;
