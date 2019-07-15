import dataObjects from '../helpers/dataObjects';
import bookingModel from '../models/bookingModel';

const { getAllData, newBooking } = dataObjects;
const { allBookings, createBooking } = bookingModel;

class bookingController {
  static async seatBooking(req, res) {
    try {
      const data = await newBooking(req, createBooking);
      res.status(201).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }

  static async getAllBookings(req, res) {
    try {
      const data = await getAllData(allBookings);
      res.status(200).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }
}

export default bookingController;
