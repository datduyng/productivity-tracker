const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

var APIRouter = require('express').Router();

const noteRouter = require('./notes/router');
const userRouter = require('./users/router');

APIRouter.use('/notes', noteRouter);
APIRouter.use('/users', userRouter);

const swaggerDefinition = {
  info : {
    title: 'Productivity tracker',
    version: '1.0',
    description: '...'
  },
  host: 'productivity-tracker.glitch.me/',
  basePath: 'api/'
}

const options = {
  swaggerDefinition,
  apis: [
    "server/api/*/*.js",
    "server/db/models/*.js"
  ]
}

const swaggerSpec = swaggerJSDoc(options);

APIRouter.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

APIRouter.use('/api-docs', swaggerUi.serve);
APIRouter.get('/api-docs', swaggerUi.setup(swaggerSpec, { explorer: true }));

module.exports = {
    APIRouter
};