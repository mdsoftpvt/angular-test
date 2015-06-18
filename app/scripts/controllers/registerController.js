'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('RegisterController', function ($scope,$rootScope,$state,UserService) {
  	$scope.username = ""
  	$scope.password =""
  	$scope.message = ""
  	
  	$scope.register = function()
  	{
  		UserService.addUser({username:$scope.username,password:$scope.password})
  		$scope.username = ""
  		$scope.password = ""
  		$scope.message = "Register successfuly.<a href='#/'> Click Here </a>to login"
  	}
  });
