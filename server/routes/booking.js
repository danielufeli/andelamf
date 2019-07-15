import express from 'express';

import bookingController from '../controllers/bookingController';
import allValidator from '../middleware/allValidator';
import auth from '../middleware/auth';
import validateBooking from '../helpers/validateBooking';
import checkBooking from '../middleware/checkBooking';

const router = express.Router();
const { getAllBookings, seatBooking } = bookingController;
const { verifyToken } = auth;
const { getUserBookings } = checkBooking;

router.post('/', allValidator(validateBooking), verifyToken, seatBooking);

router.get('/', verifyToken, getUserBookings, getAllBookings);

export default router;
