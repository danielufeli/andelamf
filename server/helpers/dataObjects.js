import dbObjects from './dbObjects';

const { insertQuery, selectQuery } = dbObjects;

export default class dataObjects {
  static async newData(req, queries) {
    const values = Object.values(req.body);
    const data = await insertQuery(values, queries);
    return data;
  }

  static async newUser(req, queries) {
    // eslint-disable-next-line camelcase
    const {
      email, first_name, last_name, password,
    } = req.body;
    const values = [email, first_name, last_name, password];
    const data = await insertQuery(values, queries);
    return data;
  }

  static async newTrip(req, queries) {
    // eslint-disable-next-line camelcase
    const {
      bus_id, origin, destination, trip_date, fare,
    } = req.body;
    const values = [bus_id, origin, destination, trip_date, fare];
    const data = await insertQuery(values, queries);
    data.id = data.trip_id;
    return data;
  }

  static async newBooking(req, queries) {
    // eslint-disable-next-line camelcase
    const { trip_id } = req.body;
    const { user_id } = req.user;
    const values = [trip_id, user_id];
    const data = await insertQuery(values, queries);
    data.id = data.booking_id;
    return data;
  }


  static async getAllData(queries) {
    const data = await selectQuery(queries);
    return data;
  }

  static userData(req) { const { user } = req; req.body = user; }
}
