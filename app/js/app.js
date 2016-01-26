
var app = angular.module('omdb', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/results/:searchTerms', {
        templateUrl: '/partials/results.html',
        controller: 'MovieController'
      })
      .when('/details/:detailsID', {
        templateUrl: '/partials/details.html',
        controller: 'DetailController'
      });
});
