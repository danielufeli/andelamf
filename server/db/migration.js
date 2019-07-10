import db from './index';
import { createQueries, dropQueries } from './queries';

const {
  userTable, tripTable, busTable, bookingTable,
} = createQueries;

const createTables = async () => {
  try {
    const user = await db.query(userTable);
    console.log(user);
    const trip = await db.query(tripTable);
    console.log(trip);
    const bus = await db.query(busTable);
    console.log(bus);
    const booking = await db.query(bookingTable);
    console.log(booking);
  } catch (error) {
    console.log(error);
  }
};

const dropTables = async () => {
  try {
    const user = await db.query(dropQueries.userTable);
    console.log(user);
    const trip = await db.query(dropQueries.tripTable);
    console.log(trip);
    const bus = await db.query(dropQueries.busTable);
    console.log(bus);
    const booking = await db.query(dropQueries.bookingTable);
    console.log(booking);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createTables,
  dropTables,
};
require('make-runnable');
