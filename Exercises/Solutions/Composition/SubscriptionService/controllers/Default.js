'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET(req.swagger.params, res, next);
};

module.exports.subscriptionIdGET = function subscriptionIdGET (req, res, next) {
  Default.subscriptionIdGET(req.swagger.params, res, next);
};
