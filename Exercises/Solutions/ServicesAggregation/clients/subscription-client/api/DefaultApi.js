/**
 * Subscription Service
 * Basic read operations to support subscriptions 
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
    define(['ApiClient', 'model/InlineResponse2001'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2001'));
  } else {
    // Browser globals (root is window)
    if (!root.SubscriptionService) {
      root.SubscriptionService = {};
    }
    root.SubscriptionService.DefaultApi = factory(root.SubscriptionService.ApiClient, root.SubscriptionService.InlineResponse2001);
  }
}(this, function(ApiClient, InlineResponse2001) {
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
     * Callback function to receive the result of the rootGET operation.
     * @callback module:api/DefaultApi~rootGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2001>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list subscriptions
     * returns a list of subscriptions
     * @param {module:api/DefaultApi~rootGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2001>}
     */
    this.rootGET = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = [InlineResponse2001];

      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionIdGET operation.
     * @callback module:api/DefaultApi~subscriptionIdGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * gets a subscription
     * returns a subscription matching the supplied id
     * @param {String} subscriptionId ID of the subscription
     * @param {module:api/DefaultApi~subscriptionIdGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.subscriptionIdGET = function(subscriptionId, callback) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId == undefined || subscriptionId == null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionIdGET");
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
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/{subscriptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
