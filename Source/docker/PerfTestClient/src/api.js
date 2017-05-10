/**
 * Performance Test
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var Promise = require("bluebird");
//let defaultBasePath = 'http://ec2-54-221-65-208.compute-1.amazonaws.com:8092/v1';
var defaultBasePath = 'http://server:8092/v1';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
/* tslint:disable:no-unused-variable */
var InlineResponseDefault = (function () {
    function InlineResponseDefault() {
    }
    return InlineResponseDefault;
}());
exports.InlineResponseDefault = InlineResponseDefault;
var Input = (function () {
    function Input() {
    }
    return Input;
}());
exports.Input = Input;
var ModelError = (function () {
    function ModelError() {
    }
    return ModelError;
}());
exports.ModelError = ModelError;
var Output = (function () {
    function Output() {
    }
    return Output;
}());
exports.Output = Output;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
var TestApiApiKeys;
(function (TestApiApiKeys) {
})(TestApiApiKeys = exports.TestApiApiKeys || (exports.TestApiApiKeys = {}));
var TestApi = (function () {
    function TestApi(basePathOrUsername, password, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(TestApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    TestApi.prototype.setApiKey = function (key, value) {
        this.authentications[TestApiApiKeys[key]].apiKey = value;
    };
    /**
     * Send a request to be echoed back
     *
     * @param input Value to be echoed back
     */
    TestApi.prototype.test = function (input) {
        var localVarPath = this.basePath + '/test';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling test.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: input,
        };
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return TestApi;
}());
exports.TestApi = TestApi;
