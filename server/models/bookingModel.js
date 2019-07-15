const bookingModel = {
  createBooking: `WITH inserted AS (INSERT INTO
  bookings(trip_id, user_id)
  values($1, $2)
  returning *)
  SELECT inserted.*, trips.bus_id, trips.trip_date, users.first_name, users.last_name, users.email, users.mobileno
  FROM inserted
  INNER JOIN trips ON inserted.trip_id = trips.trip_id
  INNER JOIN users ON inserted.user_id = users.user_id
  `,
  allBookings: 'SELECT * FROM bookings',
};

export default bookingModel;
