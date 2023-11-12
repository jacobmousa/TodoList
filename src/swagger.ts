// src/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  swaggerDefinition: {
    info: {
      title: 'Express TypeScript API',
      version: '1.0.0',
    },
  },
  apis: ['./src/**/*.ts'], // Specify the paths to your API routes
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
