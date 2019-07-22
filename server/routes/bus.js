import express from 'express';

import tripController from '../controllers/tripController';
import allValidator from '../middleware/allValidator';
import auth from '../middleware/auth';
import isAdmin from '../middleware/isAdmin';
import validateInput from '../helpers/validateInput';

const router = express.Router();
const { createBuses } = tripController;
const { verifyToken } = auth;
const { validateTrip } = validateInput;

router.post('/', verifyToken, isAdmin, createBuses);

export default router;
