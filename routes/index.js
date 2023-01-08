const routes = require('express').Router();

const myController = require('../controllers/index');

routes.get('/name', myController.getNames);

module.exports = routes;