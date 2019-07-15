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
  allBookings: `
  SELECT b.*, trips.bus_id, trips.trip_date, users.first_name, users.last_name, users.email, users.mobileno
  FROM bookings b
  INNER JOIN trips ON b.trip_id = trips.trip_id
  INNER JOIN users ON b.user_id = users.user_id
  `,
};

export default bookingModel;
