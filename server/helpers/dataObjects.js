import dbObjects from './dbObjects';
import busModel from '../models/busModel';
import tripModel from '../models/tripModel';
import bookingModel from '../models/bookingModel';

const { insertQuery, selectQuery } = dbObjects;
const { allBookings } = bookingModel;
const { getBusById } = busModel;
const { getTripById } = tripModel;

export default class dataObjects {
  static async newUser(req, queries) {
    // eslint-disable-next-line camelcase
    const {
      email, first_name, last_name, password,
    } = req.body;
    const values = [
      email.trim(),
      first_name.trim(),
      last_name.trim(),
      password.trim(),
    ];
    const data = await insertQuery(values, queries);
    return data;
  }

  static async newTrip(req, queries) {
    // eslint-disable-next-line camelcase
    const {
      bus_id, origin, destination, trip_date, fare,
    } = req.body;
    const values = [
      Number(bus_id),
      origin.trim(),
      destination.trim(),
      trip_date.trim(),
      Number(fare),
    ];
    const data = await insertQuery(values, queries);
    data.id = data.trip_id;
    return data;
  }

  static async getBusTrip(req) {
    // eslint-disable-next-line camelcase
    const { bus_id } = req.body;
    const bus = await insertQuery([Number(bus_id)], getBusById);
    return bus;
  }

  static async getBus(req) {
    // eslint-disable-next-line camelcase
    const { trip_id } = req.body;
    const trip = await insertQuery([Number(trip_id)], getTripById);
    const { bus_id } = trip;
    const bus = await insertQuery([Number(bus_id)], getBusById);
    return bus;
  }

  static async getTripBooking(req) {
    // eslint-disable-next-line camelcase
    const { trip_id } = req.body;
    const trip = await insertQuery([Number(trip_id)], getTripById);
    return trip;
  }

  static async getTripParams(req) {
    // eslint-disable-next-line camelcase
    const { tripId } = req.params;
    const trip = await insertQuery([Number(tripId)], getTripById);
    return trip;
  }

  static async newBooking(req, queries) {
    // eslint-disable-next-line camelcase
    const { trip_id, newseatno } = req.body;
    const { user_id } = req.user;
    const values = [trip_id, user_id, Number(newseatno)];
    const data = await insertQuery(values, queries);
    data.id = data.booking_id;
    return data;
  }

  static async newBus(req, queries) {
    // eslint-disable-next-line camelcase
    const {
      number_plate, manufacturer, model, year, capacity,
    } = req.body;
    const values = [number_plate, manufacturer, model, year, Number(capacity)];
    const data = await insertQuery(values, queries);
    return data;
  }

  static async getAllData(queries) {
    const data = await selectQuery(queries);
    return data;
  }

  static async updateData(req, queries) {
    const { tripId } = req.params;
    const values = ['cancelled', tripId];
    const data = await insertQuery(values, queries);
    data.message = 'Trip cancelled successfully';
    return data;
  }

  static async deleteData(req, queries) {
    const { bookingId } = req.params;
    const values = [Number(bookingId)];
    const data = await insertQuery(values, queries);
    data.message = 'Booking deleted successfully';
    return data;
  }

  static filterTrip(trips, key, value) {
    const newTrips = trips.filter(trip => trip[key].toLowerCase() === value.toLowerCase());
    return newTrips;
  }
}
