import dataObjects from '../helpers/dataObjects';
import tripModel from '../models/tripModel';
import busModel from '../models/busModel';

const {
  updateData, getAllData, newTrip, newBus,
} = dataObjects;
const { allTrips, createTrip, updateTrip } = tripModel;
const { createBus } = busModel;

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

  static async createBuses(req, res) {
    try {
      const data = await newBus(req, createBus);
      res.status(201).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }

  static async cancelTrip(req, res) {
    try {
      const data = await updateData(req, updateTrip);
      res.status(200).json({ status: 'success', data });
    } catch (error) { res.status(500).json(error); }
  }
}

export default tripController;
