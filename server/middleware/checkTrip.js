import dataObjects from '../helpers/dataObjects';
import tripModel from '../models/tripModel';

const { allTrips } = tripModel;
const { getAllData } = dataObjects;

export default class checkTrips {
  static async checkAllTrips(req, res, next) {
    try {
      const trips = await getAllData(allTrips);
      if (trips.length < 1) { return res.status(404).json({ status: 'error', message: 'No Trips Available' }); }
      return next();
    } catch (error) { return next(error); }
  }
}
