'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.byMemberMemberIdGET = function byMemberMemberIdGET (req, res, next) {
  Default.byMemberMemberIdGET(req.swagger.params, res, next);
};

module.exports.bySubscriptionSubscriptionIdGET = function bySubscriptionSubscriptionIdGET (req, res, next) {
  Default.bySubscriptionSubscriptionIdGET(req.swagger.params, res, next);
};

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET(req.swagger.params, res, next);
};
