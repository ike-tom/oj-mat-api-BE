const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['src/routes/people.routes.js'];

swaggerAutogen(outputFile, endpointsFiles);
