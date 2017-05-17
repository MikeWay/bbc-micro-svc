'use strict';

exports.rootGET = function(args, res, next) {
  /**
   *
   * no response value expected for this operation
   **/
  res.end();
}

exports.rootPOST = function(args, res, next) {
  /**
   *
   * name String name (optional)
   * year String year (optional)
   * no response value expected for this operation
   **/
  res.end("Name:" + args.name.value + " Year:" + args.year.value);
}

exports.test_pathIdGET = function(args, res, next) {
  /**
   *
   * id String ID
   * no response value expected for this operation
   **/
  res.end();
}

