angular.module('omdb').factory('movieFactory', function($http){

  var movieData = function(searchTerms){
    var url = 'http://www.omdbapi.com/?s=' + searchTerms + '&y=&plot=short&r=json';
    return $http({
      method: 'GET',
      url: url
    })
  }
  return {movieData: movieData};
})
