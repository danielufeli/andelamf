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
      .set('x-auth-token', '')
      .send(tripInfo.newTrip);
    res.status.should.be.equal(401);
    res.body.should.be.a('object');
  });
  it('should fail if no trip is available', async () => {
    const res = await chai.request(server)
      .get('/api/v1/trips')
      .set('x-auth-token', adminToken)
      .send();
    res.status.should.be.equal(404);
  });
  it('should create a trip', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips')
      .set('x-auth-token', adminToken)
      .send(tripInfo.newTrip);
    res.status.should.be.equal(201);
  });
  it('Should fail if bus_id is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('x-auth-token', adminToken)
      .send(tripInfo.ommitBusid);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"bus_id" is required');
  });
  it('Should fail if origin is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('x-auth-token', adminToken)
      .send(tripInfo.ommitOrigin);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"origin" is required');
  });
  it('Should fail if Destination is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('x-auth-token', adminToken)
      .send(tripInfo.ommitDestination);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"destination" is required');
  });
  it('Should fail if trip_date is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('x-auth-token', adminToken)
      .send(tripInfo.ommitTripDate);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('Trip date is invalid, enter date in this formt(YYYY-MM-DD)');
  });
  it('Should fail if fare is ommited', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('x-auth-token', adminToken)
      .send(tripInfo.ommitFare);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('"fare" is required');
  });
  it('Should fail if trip_date is invalid', async () => {
    const res = await chai.request(server)
      .post('/api/v1/trips/')
      .set('x-auth-token', adminToken)
      .send(tripInfo.invalidTripDate);
    res.status.should.be.equal(400);
    res.body.error.should.have.eql('Trip date is invalid, enter date in this formt(YYYY-MM-DD)');
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
      .set('x-auth-token', userToken)
      .send(tripInfo.newTrip);
    res.status.should.be.equal(403);
  });
  it('should get all trips', async () => {
    const res = await chai.request(server)
      .get('/api/v1/trips')
      .set('x-auth-token', userToken)
      .send();
    res.status.should.be.equal(200);
  });
});
