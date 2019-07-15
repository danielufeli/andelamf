const tripModel = {
  createTrip: `INSERT INTO
  trips(bus_id, origin, destination, trip_date, fare)
  values($1, $2, $3, $4, $5)
  returning *`,
  allTrips: 'SELECT * FROM trips',
  updateTrip: 'UPDATE trips SET status = $1 WHERE trip_id = $2 returning *',
};

export default tripModel;
