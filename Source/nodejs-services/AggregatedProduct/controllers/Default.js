'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.getPordocutById = function getPordocutById (req, res, next) {
  Default.getPordocutById(req.swagger.params, res, next);
};
