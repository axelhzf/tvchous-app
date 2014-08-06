var _ = require("underscore");
var Controller = require("../lib/Controller");
var client = require("../client");

class ShowController extends Controller {
  constructor($scope, $stateParams) {
    super($scope);
    var showId = $stateParams.showId;

    client.call("findShow", showId).then(function (show) {
      $scope.$apply(function () {
        $scope.show = show;
      });
    });

  }
}

module.exports = ShowController;