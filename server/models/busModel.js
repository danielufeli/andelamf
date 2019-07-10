const busModel = {
  createBus: `INSERT INTO
  buses(number_plate, manufacturer, model, year, capacity)
  values($1, $2, $3, $4, $5)
  returning *`,
  allBuses: 'SELECT * FROM buses',
};

export default busModel;
