import bookingModel from '../models/bookingModel';
import dbObjects from '../helpers/dbObjects';

const { selectQuery } = dbObjects;
const { allBookings } = bookingModel;

export default class checkBooking {
  static async getUserBookings(req, res, next) {
    try {
      const { is_admin, user_id } = req.user;
      const bookings = await selectQuery(allBookings);
      if (is_admin === false) {
        const data = bookings.filter(booking => booking.user_id === user_id);
        if (data.length < 1) { return res.status(404).json({ status: 'error', error: 'No Bookings Available' }); }
        return res.status(200).json({ status: 'success', data });
      }
      return next();
    } catch (error) { return next(error); }
  }
}
