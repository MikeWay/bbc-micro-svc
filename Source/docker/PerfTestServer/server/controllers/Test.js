'use strict';

var url = require('url');

var Test = require('./TestService');

module.exports.test = function test (req, res, next) {
  Test.test(req.swagger.params, res, next);
};
