'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET(req.swagger.params, res, next);
};

module.exports.rootPOST = function rootPOST (req, res, next) {
  Default.rootPOST(req.swagger.params, res, next);
};

module.exports.test_pathIdGET = function test_pathIdGET (req, res, next) {
  Default.test_pathIdGET(req.swagger.params, res, next);
};
