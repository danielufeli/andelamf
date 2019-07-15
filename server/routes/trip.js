import express from 'express';

import tripController from '../controllers/tripController';
import allValidator from '../middleware/allValidator';
import auth from '../middleware/auth';
import isAdmin from '../middleware/isAdmin';
import checkTrip from '../middleware/checkTrip';
import validateTrip from '../helpers/validateTrip';

const router = express.Router();
const { createTrip, getAllTrips, cancelTrip } = tripController;
const { verifyToken } = auth;
const { checkAllTrips, checkTripUpdate } = checkTrip;

router.post('/', verifyToken, isAdmin, allValidator(validateTrip), createTrip);

router.get('/', verifyToken, checkAllTrips, getAllTrips);

router.patch('/:tripId', verifyToken, isAdmin, checkTripUpdate, cancelTrip);

export default router;
