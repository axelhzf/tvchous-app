var _ = require("underscore");
var Controller = require("../lib/Controller");
var client = require("../client");

class ShowsController extends Controller {
  constructor ($scope) {
    super($scope);

    client.call("findShows").then(function (shows) {
      $scope.$apply(function () {
        $scope.shows = _.where(shows, {favorite: true});
      });
    });


  }
}

module.exports = ShowsController;