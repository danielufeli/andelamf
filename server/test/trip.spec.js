import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import userInfo from './userdb';
import tripInfo from './tripdb';

chai.use(chaiHttp);
chai.should();

describe('Test trip endpoints Admin', () => {
  let adminToken;
  beforeEach(async () => {
    const res = await chai.request(server)
      .post('/api/v1/auth/signin')
      .send(userInfo.adminUser);
    res.status.should.be.equal(200);
    res.body.should.be.a('object');
    res.body.data.should.have.property('token');
    adminToken = res.body.data.token;
  });
  it('Should fail if missing token', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips')
      .set('token', '')
      .send(tripInfo.newTrip);
    res.status.should.be.equal(401);
    res.body.should.be.a('object');
  });
  it('should fail if no trip is available', async () => {
    const res = await chai.request(server)
      .get('/api/v1/trips')
      .set('token', adminToken)
      .send();
    res.status.should.be.equal(404);
  });
  it('should create a trip', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips')
      .set('token', adminToken)
      .send(tripInfo.newTrip);
    res.status.should.be.equal(201);
  });
  it('Should fail if bus_id is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('token', adminToken)
      .send(tripInfo.ommitBusid);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"bus_id" is required');
  });
  it('Should fail if origin is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('token', adminToken)
      .send(tripInfo.ommitOrigin);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"origin" is required');
  });
  it('Should fail if Destination is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('token', adminToken)
      .send(tripInfo.ommitDestination);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"destination" is required');
  });
  it('Should fail if trip_date is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('token', adminToken)
      .send(tripInfo.ommitTripDate);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"trip_date" is required');
  });
  it('Should fail if fare is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('token', adminToken)
      .send(tripInfo.ommitFare);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"fare" is required');
  });
  it('Should fail if trip_date is omitted', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('token', adminToken)
      .send(tripInfo.invalidTripDate);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"trip_date" must be a number of milliseconds or valid date string');
  });
  it('Should get all bookings', async () => {
    const res = await chai.request(server)
      .get('/api/v1/bookings/')
      .set('token', adminToken)
      .send();
    res.status.should.be.equal(200);
  });
  it('Should cancel trip', async () => {
    const res = await chai.request(server)
      .patch('/api/v1/trips/1')
      .set('token', adminToken)
      .send('cancelled');
    res.status.should.be.equal(200);
  });
});
describe('Test trip endpoints User', () => {
  let userToken;
  beforeEach(async () => {
    const res = await chai.request(server)
      .post('/api/v1/auth/signin')
      .send(userInfo.user);
    res.status.should.be.equal(200);
    res.body.should.be.a('object');
    res.body.data.should.have.property('token');
    userToken = res.body.data.token;
  });
  it('should not allow user to create trip', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips')
      .set('token', userToken)
      .send(tripInfo.newTrip);
    res.status.should.be.equal(403);
  });
  it('should get all trips', async () => {
    const res = await chai.request(server)
      .get('/api/v1/trips')
      .set('token', userToken)
      .send();
    res.status.should.be.equal(200);
  });
  it('should allow user to create booking', async () => {
    const res = await chai.request(server)
      .post('/api/v1/bookings')
      .set('token', userToken)
      .send(tripInfo.newBooking);
    res.status.should.be.equal(201);
  });
  it('Should fail if trip_id is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/bookings/')
      .set('token', userToken)
      .send();
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"trip_id" is required');
  });
  it('Should get all users bookings', async () => {
    const res = await chai.request(server)
      .get('/api/v1/bookings/')
      .set('token', userToken)
      .send();
    res.status.should.be.equal(200);
  });
});
