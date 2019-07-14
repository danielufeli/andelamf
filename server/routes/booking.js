import express from 'express';

import bookingController from '../controllers/bookingController';
import allValidator from '../middleware/allValidator';
import auth from '../middleware/auth';
import isAdmin from '../middleware/isAdmin';
import checkValue from '../middleware/checkValue';
import validateBooking from '../helpers/validateBooking';

const router = express.Router();
const { seatBooking } = bookingController;
const { verifyToken } = auth;

router.post('/', checkValue(3), allValidator(validateBooking), verifyToken, seatBooking);

export default router;
