'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('HeaderController', function ($scope,$rootScope) {
  	if(!$rootScope.active)
  	{
  		$rootScope.active = 1
  	}
  	$scope.navigation = function(index)
  	{
  		$rootScope.active = index;
  	}
  });
