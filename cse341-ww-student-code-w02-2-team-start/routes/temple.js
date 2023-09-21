const routes = require('express').Router();
const temples = require('../controllers/temple.js');

routes.get('/', temples.findAll);
//routes.get('/', temples.findAllPublished);
routes.get('/:temple_id', temples.findOne);

routes.post('/', temples.create);

routes.delete('/:temple_id', temples.delete);
routes.delete('/', temples.deleteAll);
routes.post('/:temple_id', temples.update);


module.exports = routes;
