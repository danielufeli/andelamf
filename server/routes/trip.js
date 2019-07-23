import express from 'express';

import tripController from '../controllers/tripController';
import allValidator from '../middleware/allValidator';
import auth from '../middleware/auth';
import isAdmin from '../middleware/isAdmin';
import checkTrip from '../middleware/checkTrip';
import validateInput from '../helpers/validateInput';

const router = express.Router();
const {
  createTrip, getAllTrips, cancelTrip,
} = tripController;
const { verifyToken } = auth;
const {
  checkAllTrips, checkTripUpdate, checkBusBooking,
} = checkTrip;
const { validateTrip } = validateInput;

router.post('/', verifyToken, isAdmin, allValidator(validateTrip), checkBusBooking, createTrip);

router.get('/', verifyToken, checkAllTrips, getAllTrips);

router.patch('/:tripId', verifyToken, isAdmin, checkTripUpdate, cancelTrip);

export default router;
