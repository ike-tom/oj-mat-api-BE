require('dotenv').config();
const routes = require('./routes/people.routes');

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'oj-mat-api',
      version: '1.0.0',
      description: 'Father Matthew Characters API'
    }
  }
};

database.once('connected', () => {
  console.log('Database Connected');
});
const app = express();
app.use('/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile, options));

app.use(express.json());
app.use('/api', routes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
