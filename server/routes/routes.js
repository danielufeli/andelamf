import morgan from 'morgan';
import bodyParser from 'body-parser';
import home from './home';
import auth from './auth';
import trip from './trip';
import booking from './booking';

export default (app) => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/', home);
  app.use('/api/v1/auth', auth);
  app.use('/api/v1/trips', trip);
  app.use('/api/v1/bookings', booking);
};
