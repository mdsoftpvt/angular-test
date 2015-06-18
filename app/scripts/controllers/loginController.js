'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('LoginController', function ($scope,$rootScope,$state,UserService) {
  	$scope.username = "";
  	$scope.password ="";
  	$scope.message = "";
  	$scope.login = function()
  	{
  		if(UserService.userExsit({username:$scope.username,password:$scope.password}))
  		{
  			$state.go("dashboard");	
  		}
  		else
  		{  			
  			$scope.message = "Invalid ID or password. Please try again"
  		}
  	}
  });
