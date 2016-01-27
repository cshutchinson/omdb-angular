angular.module('omdb').factory('movieFactory', function($http){
  var movieData = function(searchTerms){
    var url = 'http://www.omdbapi.com/?s=' + searchTerms + '&type=movie&y=&plot=short&r=json';
    return $http({
      method: 'GET',
      url: url
    })
  }
  return {movieData: movieData};
})


angular.module('omdb').factory('detailFactory', function($http){
  var movieDetail = function(id){
    var url = 'http://www.omdbapi.com/?i=' + id + '&y=&plot=short&r=json';
    return $http({
      method: 'GET',
      url: url
    })
  }
  return {movieDetail: movieDetail};
})
