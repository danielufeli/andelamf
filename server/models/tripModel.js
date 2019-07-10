const tripModel = {
  createTrip: `INSERT INTO
  trips(bus_id, origin, destination, trip_date, fare)
  values($1, $2, $3, $4, $5)
  returning *`,
  allTrips: 'SELECT * FROM trips',
};

export default tripModel;
