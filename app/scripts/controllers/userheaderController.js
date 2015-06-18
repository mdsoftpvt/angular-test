'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('UserheaderController', function ($scope,$rootScope,UserService) {
    $scope.username = UserService.getUser().username
  	
  });
