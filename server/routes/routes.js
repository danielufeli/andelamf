import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import home from './home';
import auth from './auth';
import trip from './trip';
import booking from './booking';
import bus from './bus';
import swaggerSpec from '../config/swagger';

export default (app) => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/', home);
  app.use('/api/v1/auth', auth);
  app.use('/api/v1/trips', trip);
  app.use('/api/v1/bus', bus);
  app.use('/api/v1/bookings', booking);
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use((req, res, next) => res.status(404).json({ status: 'error', error: `Route '${req.url}' Not found.` }));
  app.use((req, res, next) => res.status(500).json({ status: 'error', error: 'An internal error occured an Administartor has been notified' }));
};
