'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('DashboardController', function ($scope,$rootScope,$state,UserService) {
  	$scope.username = UserService.currentUser.username
  });
