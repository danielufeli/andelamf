import db from './index';
import { seedQueries } from './queries';

const seedTables = async () => {
  try {
    const seeded = await db.query(seedQueries.userTable);
    console.log(seeded);
    const seedBus = await db.query(seedQueries.busTable);
    console.log(seedBus);
    const seedTrip = await db.query(seedQueries.tripTable);
    console.log(seedTrip);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  seedTables,
};
require('make-runnable');
