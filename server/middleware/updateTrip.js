import tripModel from '../models/tripModel';
import dbObjects from '../helpers/dbObjects';

const { selectQuery, insertQuery } = dbObjects;
const { allTrips, cancelTrip } = tripModel;

export default class updateTrip {
  static async updateTripWare(req, res, next) {
    try {
      const { tripId } = req.params;
      const trips = await selectQuery(allTrips);
      const trip = trips.find(userTrip => userTrip.trip_id === tripId);
      if (!trip) return res.status(404).json({ status: 'error', error: 'No Trip Available' });
      const values = [req.body.status || trip.status, tripId];
      const data = await insertQuery(values, cancelTrip);
      return data;
      return next();
    } catch (error) { return next(error); }
  }
}
