const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.aliciaRoute);
routes.get('/derek', lesson1Controller.derekRoute);

module.exports = routes;