const routes = require('express').Router();

const myController = require('../controllers/index');

routes.get('/names', myController.getNames);

module.exports = routes;