import dataObjects from '../helpers/dataObjects';
import tripModel from '../models/tripModel';

const { updateData, getAllData, newTrip } = dataObjects;
const { allTrips, createTrip, updateTrip } = tripModel;

class tripController {
  static async createTrip(req, res) {
    try {
      const data = await newTrip(req, createTrip);
      res.status(201).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }

  static async getAllTrips(req, res) {
    try {
      const data = await getAllData(allTrips);
      res.status(200).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }

  static async cancelTrip(req, res) {
    try {
      const data = await updateData(req, updateTrip, allTrips);
      res.status(200).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }
}

export default tripController;
