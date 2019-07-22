import express from 'express';

import bookingController from '../controllers/bookingController';
import allValidator from '../middleware/allValidator';
import validateInput from '../helpers/validateInput';
import auth from '../middleware/auth';
import checkBooking from '../middleware/checkBooking';
import checkTrips from '../middleware/checkTrip';

const router = express.Router();
const { getAllBookings, seatBooking, deleteBookings } = bookingController;
const { verifyToken } = auth;
const { checkTripBooking } = checkTrips;
const {
  checkAdmin, getUserBookings, getSingleUserBooking, allocateSeat,
} = checkBooking;
const { validateBooking } = validateInput;

router.post('/', verifyToken, allValidator(validateBooking), checkTripBooking, allocateSeat, seatBooking);

router.get('/', verifyToken, getUserBookings, getAllBookings);

router.delete('/:bookingId', verifyToken, checkAdmin, getSingleUserBooking, deleteBookings);

export default router;
