'use strict';

var url = require('url');


var Developers = require('./DevelopersService');


module.exports.getProductById = function getProductById (req, res, next) {
  Developers.getProductById(req.swagger.params, res, next);
};
