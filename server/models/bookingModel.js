const bookingModel = {
  createBooking: `WITH inserted AS (INSERT INTO
  bookings(trip_id, user_id, seat_number)
  values($1, $2, $3)
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
  deleteBookingQuery: 'DELETE FROM bookings WHERE booking_id=$1 returning *',
  getBookingById: 'SELECT * FROM bookings WHERE booking_id = $1',
  updateSeatNum: 'UPDATE bookings SET seat_number = $1 WHERE booking_id = $2 returning *',
  getBookingByTrip: 'SELECT * FROM bookings WHERE trip_id = $1',
};

export default bookingModel;
