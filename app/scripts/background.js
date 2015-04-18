'use strict';

// var dataReloadTask = window.setInterval(dataReload, 2000);

// function dataReload() {
//   console.log('hello');
//   reqwest({
//     url: 'https://sandbox-api.uber.com/v1/products',
//     // type: 'json',
//     method: 'get',
//     headers: {
//       'Authorization': 'Token ' + window.server_token,
//     },
//     data: {
//       '': '',
//     },
//     contentType: 'application/json',
//     crossOrigin: true,
//     // withCredentials: true,
//     success: function(resp) {
//       alert(resp);
//       chrome.browserAction.setBadgeText({text: 'xxx'});
//     },
//     error: function(error) {
//       alert(error.description);
//     },
//   });
// }

reqwest({
  url: 'https://sandbox-api.uber.com/v1/estimates/price',
  // type: 'json',
  method: 'get',
  headers: {
    'Authorization': 'Token ' + window.server_token,
  },
  data: {
    'start_latitude': 14.5582276,
    'start_longitude': 121.0457224,
    // work
    'end_latitude': 14.557993,
    'end_longitude': 121.023846,
  },
  contentType: 'application/json',
  crossOrigin: true,
  success: function(resp) {
    console.log(resp);
    var badgeText = "";
    _.forEach(resp.prices, function(product) {
      if (product.surge_multiplier > 1.0) chrome.browserAction.setBadgeText({text: "SURGE"});
    });
  },
  error: function(error) {
    console.log(error);
  },
});
