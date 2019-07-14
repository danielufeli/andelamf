import dataObjects from '../helpers/dataObjects';
import bookingModel from '../models/bookingModel';

const { userData, newData } = dataObjects;
const { createBooking } = bookingModel;

class bookingController {
  static async seatBooking(req, res) {
    try {
      const data = await newData(req, createBooking);
      userData(req);
      res.status(201).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }
}

export default bookingController;
