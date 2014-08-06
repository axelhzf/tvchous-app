var _ = require("underscore");
var Client = require("tvchous-client");
var client = new Client("http://localhost:5004");

module.exports = client;

var oldCall = client.call;

var getQ = _.memoize(function () {
  return angular.element(document.body).injector().get("$q");
});

// ES6 promises to $q
client.call = function () {
  var $q = getQ();
  var deferred = $q.defer();
  oldCall.apply(client, arguments).then(deferred.resolve, deferred.reject);
  return deferred.promise;
};