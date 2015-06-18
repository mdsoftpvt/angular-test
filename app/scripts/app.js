'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router', 
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
    .state('/',{
        url: '/',   
        views: { 
            'header': {
                templateUrl: 'views/header.html',
                controller: 'HeaderController'
            },
            'content': {
                templateUrl: 'views/login.html',
                controller: 'LoginController'                 
            }   
        }                 
    })
    .state('register',{
        url: '/register',   
        views: {
            'header': {
                templateUrl: 'views/header.html',
                controller: 'HeaderController'
            }, 
            'content': {
                templateUrl: 'views/register.html',
                controller: 'RegisterController'   
            }   
        }                 
    })
    .state('dashboard',{
        url: '/dashboard',
        views: {
            'header': {
                templateUrl: 'views/userHeader.html',
                controller: 'UserheaderController'                
            },
            'content': {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardController'
            }
        }
    }) 
}); 