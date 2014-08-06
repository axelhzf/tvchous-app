var _ = require("underscore");
var Controller = require("../lib/Controller");
var client = require("../client");

class SeasonController extends Controller {
  constructor ($scope, $stateParams) {
    super($scope);
    var showId = $stateParams.showId;
    var seasonId = $stateParams.seasonId;

    client.call("findSeason", showId, seasonId).then(function (season) {
      $scope.season = season;
    });
  }
}

module.exports = SeasonController;