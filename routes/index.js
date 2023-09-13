const routes = require('express').Router();
const lessonController = require('../controllers/lesson1');

routes.get('/', lessonController.aliciaRoute);
routes.get('/derek', lessonController.derekRoute);

module.exports = routes;