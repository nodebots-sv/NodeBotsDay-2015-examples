var app = angular.module('nodeBotsApp', []);

app.controller('appCtrl', ['$scope', '$http', function($scope, $http){
  $scope.title = "NodeBots El Salvador";

  $scope.up = function(){
    console.log("hello");
    $http
      .post('/remote', {btn:'up'})
      .success(function(data){
        console.log('adelante');
      });
  };

  $scope.down = function(){
    console.log("hello");
    $http
      .post('/remote', {btn:'down'})
      .success(function(data){
        console.log('adelante');
      });
  };

  $scope.stop = function(){
    console.log("hello");
    $http
      .post('/remote', {btn:'stop'})
      .success(function(data){
        console.log('adelante');
      });
  };

}]);
