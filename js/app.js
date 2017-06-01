var app = angular.module('myapp', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/',{
     templateUrl:'main.html',
     controller:'maincontroller'
  })
  .when('/cube',{
    templateUrl:'cube.html',
    controller:'cubecontroller'
  });
}]);
