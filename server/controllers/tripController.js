import dataObjects from '../helpers/dataObjects';
import tripModel from '../models/tripModel';

const { userData, newData } = dataObjects;
const { createTrip } = tripModel;

class tripController {
  static async createTrip(req, res) {
    try {
      const data = await newData(req, createTrip);
      userData(req);
      res.status(201).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }
}

export default tripController;
