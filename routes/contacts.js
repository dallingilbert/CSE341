const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getContacts);
routes.get('/:contactId', contactsController.getContactById);

module.exports = routes;