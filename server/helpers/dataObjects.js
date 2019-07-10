import dbObjects from './dbObjects';

const { insertQuery, selectQuery } = dbObjects;

export default class dataObjects {
  static async newData(req, queries) {
    const values = Object.values(req.body);
    const data = await insertQuery(values, queries);
    return data;
  }

  static async getAllData(queries) {
    const data = await selectQuery(queries);
    return data;
  }

  static userData(req) { const { user } = req; req.body = user; }
}
