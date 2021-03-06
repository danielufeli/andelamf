import bookingModel from '../models/bookingModel';
import seatArray from '../helpers/seatArray';
import dbObjects from '../helpers/dbObjects';
import dataObjects from '../helpers/dataObjects';

const { selectQuery, insertQuery } = dbObjects;
const { getBus, getBookingParams, getBusBooking } = dataObjects;
const { allBookings, getBookingByTrip } = bookingModel;

export default class checkBooking {
  static async getUserBookings(req, res, next) {
    try {
      const { is_admin, user_id } = req.user;
      const bookings = await selectQuery(allBookings);
      if (bookings.length < 1) { return res.status(404).json({ status: 'error', error: 'No Bookings Available' }); }
      if (is_admin === false) {
        const data = bookings.filter(booking => booking.user_id === user_id);
        if (data.length < 1) { return res.status(404).json({ status: 'error', error: 'You have not made a booking yet' }); }
        return res.status(200).json({ status: 'success', data });
      }
      return next();
    } catch (error) { return next(error); }
  }

  static async getSingleUserBooking(req, res, next) {
    try {
      const { user_id } = req.user;
      const userBooking = await getBookingParams(req);
      if (!userBooking) { return res.status(404).json({ status: 'error', error: 'Booking Not Found' }); }
      if (userBooking.user_id !== user_id) { return res.status(401).json({ status: 'error', error: 'You cannot access another person booking' }); }
      return next();
    } catch (error) { return next(error); }
  }

  static async checkAdmin(req, res, next) {
    try {
      if (req.user.is_admin === true) { return res.status(403).json({ status: 'error', error: 'Admin is not allowed to make or delete bookings' }); }
      return next();
    } catch (error) { return next(error); }
  }

  static async allocateSeat(req, res, next) {
    try {
      const { trip_id } = req.body;
      const bookings = await selectQuery(allBookings);
      const tripBookings = bookings.filter(ubooking => ubooking.trip_id === Number(trip_id));
      const bookedSeats = tripBookings.map(a => a.seat_number);
      const bus = await getBus(req);
      if (!bus) { return res.status(404).json({ status: 'error', error: 'No Bus Available' }); }
      const { capacity } = bus;
      const seats = seatArray(Number(capacity));
      const availableseats = seats.filter(seat => !bookedSeats.includes(seat));
      if (availableseats.length < 1) { return res.status(404).json({ status: 'error', error: 'No Seat Available' }); }
      req.body.newseatno = availableseats[0];
      return next();
    } catch (error) { return next(error); }
  }

  static async changeSeat(req, res, next) {
    try {
      const { seat_number } = req.body;
      const booking = await getBookingParams(req);
      const { trip_id } = booking;
      req.body.trip_id = trip_id;
      const bookings = await selectQuery(allBookings);
      const tripBookings = bookings.filter(ubooking => ubooking.trip_id === Number(trip_id));
      const bus = await getBus(req);
      if (seat_number > bus.capacity) { return res.status(404).json({ status: 'error', error: `The bus has only ${bus.capacity} seats` }); }
      const bookedSeats = tripBookings.find(seatno => seatno.seat_number === Number(seat_number));
      if (bookedSeats) { return res.status(404).json({ status: 'error', error: 'This seat has been booked' }); }
      return next();
    } catch (error) { return next(error); }
  }
}
