import express from 'express';

import tripController from '../controllers/tripController';
import allValidator from '../middleware/allValidator';
import auth from '../middleware/auth';
import isAdmin from '../middleware/isAdmin';
import checkTrip from '../middleware/checkTrip';
import validateTrip from '../helpers/validateTrip';
import checkValue from '../middleware/checkValue';

const router = express.Router();
const { createBus, createTrip, getAllTrips } = tripController;
const { verifyToken } = auth;
const { checkAllTrips } = checkTrip;

router.post('/', verifyToken, isAdmin, createTrip);

router.post('/', verifyToken, isAdmin, createBus);

router.get('/', verifyToken, checkAllTrips, getAllTrips);

export default router;
