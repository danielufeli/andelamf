const busModel = {
  createBus: `INSERT INTO
  buses(number_plate, manufacturer, model, year, capacity)
  values($1, $2, $3, $4, $5)
  returning *`,
  allBuses: 'SELECT * FROM buses',
  getBusById: 'SELECT * FROM buses WHERE bus_id = $1',
};

export default busModel;
