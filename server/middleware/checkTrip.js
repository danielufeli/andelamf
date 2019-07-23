import dataObjects from '../helpers/dataObjects';
import tripModel from '../models/tripModel';

const { allTrips } = tripModel;
const {
  getAllData, getTripBooking, getBusTrip, getTripParams, filterTrip,
} = dataObjects;

export default class checkTrips {
  static async checkAllTrips(req, res, next) {
    try {
      const trips = await getAllData(allTrips);
      if (trips.length < 1) { return res.status(404).json({ status: 'error', error: 'No Trips Available' }); }
      const { destination, origin } = req.query;
      if (destination !== undefined) {
        const data = filterTrip(trips, 'destination', destination);
        if (data.length < 1) { return res.status(404).json({ status: 'error', error: `No Trips Found with '${destination}' Destination` }); }
        return res.status(200).json({ status: 200, data });
      }
      if (origin !== undefined) {
        const data = filterTrip(trips, 'origin', origin);
        if (data.length < 1) { return res.status(404).json({ status: 'error', error: `No Trips Found with '${origin}' origin` }); }
        return res.status(200).json({ status: 200, data });
      }
      return next();
    } catch (error) { return next(error); }
  }

  static async checkTripBooking(req, res, next) {
    try {
      const trip = await getTripBooking(req);
      if (!trip) { return res.status(404).json({ status: 'error', error: 'Trip Not Available' }); }
      if (trip.status === 'cancelled') { return res.status(400).json({ status: 'error', error: 'Trip has been cancelled' }); }
      return next();
    } catch (error) { return next(error); }
  }

  static async checkBusBooking(req, res, next) {
    try {
      const bus = await getBusTrip(req);
      if (!bus) { return res.status(404).json({ status: 'error', error: 'bus_id Not Found' }); }
      return next();
    } catch (error) { return next(error); }
  }

  static async checkTripUpdate(req, res, next) {
    try {
      const trip = await getTripParams(req);
      if (!trip) { return res.status(404).json({ status: 'error', error: 'No Trip Available' }); }
      if (trip.status === 'cancelled') { return res.status(400).json({ status: 'error', error: 'Trip has been cancelled' }); }
      return next();
    } catch (error) { return next(error); }
  }
}
