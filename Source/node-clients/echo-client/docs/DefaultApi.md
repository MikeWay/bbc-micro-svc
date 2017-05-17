# Echo.DefaultApi

All URIs are relative to *http://localhost:8080/echo*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | 
[**rootPost**](DefaultApi.md#rootPost) | **POST** / | 
[**testPathIdGet**](DefaultApi.md#testPathIdGet) | **GET** /test-path/{id} | 


<a name="rootGet"></a>
# **rootGet**
> rootGet()



### Example
```javascript
var Echo = require('echo');

var apiInstance = new Echo.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.rootGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rootPost"></a>
# **rootPost**
> rootPost(opts)



### Example
```javascript
var Echo = require('echo');

var apiInstance = new Echo.DefaultApi();

var opts = { 
  'name': "name_example", // String | name
  'year': "year_example" // String | year
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.rootPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name | [optional] 
 **year** | **String**| year | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="testPathIdGet"></a>
# **testPathIdGet**
> testPathIdGet(id)



### Example
```javascript
var Echo = require('echo');

var apiInstance = new Echo.DefaultApi();

var id = "id_example"; // String | ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.testPathIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

