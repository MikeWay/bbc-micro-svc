'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.memberIdGET = function memberIdGET (req, res, next) {
  Default.memberIdGET(req.swagger.params, res, next);
};

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET(req.swagger.params, res, next);
};
