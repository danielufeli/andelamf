const tripInfo = {
  newTrip: {
    bus_id: 1,
    origin: 'Surulere',
    destination: 'Agege',
    trip_date: '2019-07-09',
    fare: 1000.00,
  },
  newBus: {
    number_plate: 'EKY430GI',
    manufacturer: 'Toyota',
    model: 'Haice',
    year: '2005',
    capacity: 14,
  },
  newBooking: {
    trip_id: 1,
  },
  ommitBookingUser: {
    trip_id: 1,
    seat_number: 5,
  },
  ommitBookingSeat: {
    trip_id: 1,
    user_id: 2,
  },
  ommitBusid: {
    origin: 'Sururlere',
    destination: 'Agege',
    trip_date: '2019-07-09',
    fare: 1000.00,
  },
  ommitOrigin: {
    bus_id: 12,
    destination: 'Agege',
    trip_date: '2019-07-09',
    fare: 1000.00,
  },
  ommitDestination: {
    bus_id: 12,
    origin: 'Sururlere',
    trip_date: '2019-07-09',
    fare: 1000.00,
  },
  ommitTripDate: {
    bus_id: 12,
    origin: 'Sururlere',
    destination: 'Agege',
    fare: 1000.00,
  },
  invalidTripDate: {
    bus_id: 12,
    origin: 'Sururlere',
    destination: 'Agege',
    trip_date: 'sasasa',
    fare: 1000.00,
  },
  ommitFare: {
    bus_id: 12,
    origin: 'Sururlere',
    destination: 'Agege',
    trip_date: '2019-07-09',
  },
};

export default tripInfo;
