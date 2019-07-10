import db from '../db';

export default class dbObjects {
  static async insertQuery(values, queries) {
    const { rows } = await db.query(queries, values);
    return rows[0];
  }

  static async selectQuery(queries) {
    const { rows } = await db.query(queries);
    return rows;
  }
}
