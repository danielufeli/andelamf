import db from './index';
import { createQueries, dropQueries } from './queries';

const { userTable } = createQueries;

const createTables = async () => {
  try {
    const user = await db.query(userTable);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const dropTables = async () => {
  try {
    const user = await db.query(dropQueries.userTable);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createTables,
  dropTables,
};
require('make-runnable');
