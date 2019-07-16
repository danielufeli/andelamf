import swaggerJsDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  info: {
    title: 'Way Farer',
    version: '1.0.0',
    description: 'WayFarer is a public bus transportation booking server. You are required to develop the back-end API.',
  },
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'token',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['*/swagger-doc/*.yaml'],
};

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;
