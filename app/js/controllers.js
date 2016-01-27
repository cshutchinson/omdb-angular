angular.module('omdb').controller("SearchController", function($scope, $location){
  $scope.searchTerms = '';
  $scope.changeLocation = function(){
    $location.path('/results/' + $scope.searchTerms);
    return true;
  }
});

angular.module('omdb').controller("MovieController", function($scope, movieFactory, $routeParams){
  $scope.search = function(){
   movieFactory.movieData($routeParams.searchTerms).then(function(result){
     $scope.movies = result.data.Search;
   });
  }
  $scope.search();
});

angular.module('omdb').controller("DetailController", function($scope, detailFactory, $routeParams){
  $scope.detail = function(){
    detailFactory.movieDetail($routeParams.detailsID).then(function(result){
      $scope.movieDetail = result.data;
      console.log($scope.movieDetail);
    });
  }
  $scope.detail();
});
