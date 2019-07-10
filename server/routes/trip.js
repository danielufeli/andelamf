import express from 'express';

import tripController from '../controllers/tripController';
import allValidator from '../middleware/allValidator';
import auth from '../middleware/auth';
import isAdmin from '../middleware/isAdmin';
import validateTrip from '../helpers/validateTrip';

const router = express.Router();
const { createTrip } = tripController;
const { verifyToken } = auth;

router.post('/', verifyToken, isAdmin, allValidator(validateTrip), createTrip);

export default router;
