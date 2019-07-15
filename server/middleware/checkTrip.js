import dataObjects from '../helpers/dataObjects';
import tripModel from '../models/tripModel';

const { allTrips } = tripModel;
const { getAllData } = dataObjects;

export default class checkTrips {
  static async checkAllTrips(req, res, next) {
    try {
      const trips = await getAllData(allTrips);
      if (trips.length < 1) { return res.status(404).json({ status: 'error', error: 'No Trips Available' }); }
      return next();
    } catch (error) { return next(error); }
  }

  static async checkTripUpdate(req, res, next) {
    try {
      const { tripId } = req.params;
      const trips = await getAllData(allTrips);
      const trip = trips.find(userTrip => userTrip.trip_id === Number(tripId));
      if (!trip) return res.status(404).json({ status: 'error', error: 'No Trip Available' });
      return next();
    } catch (error) { return next(error); }
  }
}
