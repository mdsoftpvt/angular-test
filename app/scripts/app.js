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
                templateUrl: 'views/header.html'
            },
            'content': {
                templateUrl: 'views/login.html' 
            }   
        }                 
    })
    .state('register',{
        url: '/register',   
        views: {
            'header': {
                templateUrl: 'views/header.html'
            }, 
            'content': {
                templateUrl: 'views/register.html' 
            }   
        }                 
    })
    .state('app',{
        url: '/home/',
        views: {
            'header': {
                templateUrl: 'views/header.html'
            },
            'content': {
                templateUrl: 'views/content.html',
                controller: 'ContentController'
            }
        }
    }) 
}); 