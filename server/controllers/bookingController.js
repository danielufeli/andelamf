import dataObjects from '../helpers/dataObjects';
import bookingModel from '../models/bookingModel';

const {
  deleteData, getAllData, newBooking, updateSeat,
} = dataObjects;
const {
  allBookings, createBooking, deleteBookingQuery, updateSeatNum,
} = bookingModel;

class bookingController {
  static async seatBooking(req, res) {
    try {
      const data = await newBooking(req, createBooking);
      res.status(201).json({ status: 'success', data });
    } catch (error) { res.status(500).json({ status: 'error', error: 'An internal error occured an Administartor has been notified' }); }
  }

  static async getAllBookings(req, res) {
    try {
      const data = await getAllData(allBookings);
      res.status(200).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }

  static async deleteBookings(req, res) {
    try {
      const data = await deleteData(req, deleteBookingQuery);
      res.status(200).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }

  static async updateSeatNo(req, res) {
    try {
      const data = await updateSeat(req, updateSeatNum);
      res.status(200).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }
}

export default bookingController;
