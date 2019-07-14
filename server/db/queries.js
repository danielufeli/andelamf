const createQueries = {
  userTable: `CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    mobileno VARCHAR(100),
    address VARCHAR(100),
    registered TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_admin BOOLEAN DEFAULT FALSE,
    password VARCHAR(255) NOT NULL
  )`,
  tripTable: `CREATE TABLE trips (
    trip_id SERIAL PRIMARY KEY,
    bus_id VARCHAR(100) NOT NULL,
    origin VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    trip_date VARCHAR(100) NOT NULL,
    fare VARCHAR(100) NOT NULL,
    status VARCHAR(100) DEFAULT 'active',
    createdon TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,
  busTable: `CREATE TABLE buses (
    bus_id SERIAL PRIMARY KEY,
    number_plate VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year VARCHAR(100) NOT NULL,
    capacity VARCHAR(100) NOT NULL
  )`,
  bookingTable: `CREATE TABLE bookings (
    booking_id SERIAL NOT NULL,
    trip_id SERIAL NOT NULL,
    user_id SERIAL NOT NULL,
    seat_number VARCHAR(100) NOT NULL,
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
  users(first_name, last_name, email, mobileno, address, is_admin, password)
  VALUES('Daniel', 'Ufeli', 'admin@wayfarer.com', '08082205956', '26 fagbeyiro street alakuko', true, '${hashPassword}'),
  ('James', 'Oniola', 'user1@wayfarer.com', '08105334020', '26 fagbeyiro street alakuko', false, '${hashPassword}'),
  ('Olanrewaju', 'Julius', 'user2@wayfarer.com', '08037265917', '26 fagbeyiro street alakuko', false, '${hashPassword}')
  `,
};

module.exports = {
  createQueries,
  dropQueries,
  seedQueries,
};
