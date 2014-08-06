require("traceur-runtime");
var angular = require("angular");
require("angular-animate");
require("angular-sanitize");
require("angular-ui-router");
require("ionic");
require("ionic-angular");

var app = angular.module("tvchous", ["ionic"]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("shows", {
      url: "/",
      template: require("./templates/shows.jade")
    })
    .state("show", {
      url: "/show/:showId",
      template: require("./templates/show.jade")
    })
    .state("season", {
      url: "/show/:showId/season/:seasonId",
      template: require("./templates/season.jade")
    })
  ;
  $urlRouterProvider.otherwise("/");
});

app.controller('ShowsController', require("./controllers/ShowsController"));
app.controller('ShowController', require("./controllers/ShowController"));
app.controller('SeasonController', require("./controllers/SeasonController"));