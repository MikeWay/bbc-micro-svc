/**
 * Purchase History
 * Basic read operations to access the purchase history 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.PurchaseHistory) {
      root.PurchaseHistory = {};
    }
    root.PurchaseHistory.DefaultApi = factory(root.PurchaseHistory.ApiClient, root.PurchaseHistory.InlineResponse200);
  }
}(this, function(ApiClient, InlineResponse200) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the byMemberMemberIdGet operation.
     * @callback module:api/DefaultApi~byMemberMemberIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list all purchases for a single member
     * returns a list of subscriptions
     * @param {String} memberId ID of the member whose purchases are being listed
     * @param {module:api/DefaultApi~byMemberMemberIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.byMemberMemberIdGet = function(memberId, callback) {
      var postBody = null;

      // verify the required parameter 'memberId' is set
      if (memberId == undefined || memberId == null) {
        throw new Error("Missing the required parameter 'memberId' when calling byMemberMemberIdGet");
      }


      var pathParams = {
        'memberId': memberId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/xml'];
      var accepts = ['application/json', 'text/html'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/byMember/{memberId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bySubscriptionSubscriptionIdGet operation.
     * @callback module:api/DefaultApi~bySubscriptionSubscriptionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list all purchases for a single subscription type
     * returns a list of subscriptions
     * @param {String} subscriptionId ID of the subscription for which purchases are being listed
     * @param {module:api/DefaultApi~bySubscriptionSubscriptionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.bySubscriptionSubscriptionIdGet = function(subscriptionId, callback) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId == undefined || subscriptionId == null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling bySubscriptionSubscriptionIdGet");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/xml'];
      var accepts = ['application/json', 'text/html'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/bySubscription/{subscriptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rootGet operation.
     * @callback module:api/DefaultApi~rootGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list all purchases
     * returns a list of purchases
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit number of purchases to return (default to 11)
     * @param {Number} opts.start first purchase to (default to 0)
     * @param {module:api/DefaultApi~rootGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200>}
     */
    this.rootGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'start': opts['start']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/xml'];
      var accepts = ['application/json', 'text/html'];
      var returnType = [InlineResponse200];

      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));