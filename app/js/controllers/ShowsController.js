var _ = require("underscore");
var Controller = require("../lib/Controller");
var client = require("../client");

class ShowsController extends Controller {
  constructor ($scope) {
    super($scope);
    var promise = client.call("findShows").then(function (shows) {
      $scope.shows = _.where(shows, {favorite: true});
    });
  }
}

module.exports = ShowsController;