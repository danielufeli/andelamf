const createQueries = {
  userTable: `CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password VARCHAR(255) NOT NULL,
    mobileno VARCHAR(100),
    address VARCHAR(100),
    is_admin BOOLEAN DEFAULT FALSE,
    registered TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,
  tripTable: `CREATE TABLE trips (
    trip_id SERIAL PRIMARY KEY,
    bus_id INTEGER NOT NULL,
    origin VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    trip_date VARCHAR(100) NOT NULL,
    fare INTEGER NOT NULL,
    status VARCHAR(100) DEFAULT 'active',
    createdon TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,
  busTable: `CREATE TABLE buses (
    bus_id SERIAL PRIMARY KEY,
    number_plate VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year VARCHAR(100) NOT NULL,
    capacity INTEGER NOT NULL
  )`,
  bookingTable: `CREATE TABLE bookings (
    booking_id SERIAL NOT NULL,
    trip_id SERIAL NOT NULL,
    user_id SERIAL NOT NULL,
    seat_number INTEGER NOT NULL,
    createdon TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(booking_id, trip_id, user_id)
  )`,
};

const dropQueries = {
  userTable: 'DROP TABLE IF EXISTS users CASCADE',
  tripTable: 'DROP TABLE IF EXISTS trips CASCADE',
  busTable: 'DROP TABLE IF EXISTS buses CASCADE',
  bookingTable: 'DROP TABLE IF EXISTS bookings CASCADE',
};
const hashPassword = '$2a$10$Pei8CV/I0Z3BMFVJuJClaePYmvc.tKnaGK3xFXKJoTTjul84exLfe';
const seedQueries = {
  userTable: `INSERT INTO
  users(email, first_name, last_name, password, mobileno, address, is_admin)
  VALUES('admin@wayfarer.com', 'Daniel', 'Ufeli', '${hashPassword}', '08082205956', '26 fagbeyiro street alakuko', true),
  ('user1@wayfarer.com', 'James', 'Oniola', '${hashPassword}', '08105334020', '26 fagbeyiro street alakuko', false),
  ('user2@wayfarer.com', 'Olanrewaju', 'Julius', '${hashPassword}', '08037265917', '26 fagbeyiro street alakuko', false)
  `,
  busTable: `INSERT INTO
  buses(number_plate, manufacturer, model, year, capacity)
  VALUES('AGL409EK', 'Toyota', 'Coaster', '2009', '32')
  `,
  tripTable: `INSERT INTO
  trips(bus_id, origin, destination, trip_date, fare)
  VALUES('1', 'Akute', 'Lekki', '2019-07-20', '1000')
  `,
};

module.exports = {
  createQueries,
  dropQueries,
  seedQueries,
};
