'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.getSubsForMember = function getSubsForMember (req, res, next) {
  Default.getSubsForMember(req.swagger.params, res, next);
};
