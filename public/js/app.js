'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
    	templateUrl: 'partial/index', 
    	controller: IndexCtrl
    }).
    when('/section2', {
    	templateUrl: 'partial/OurService', 
    	controller: OurServiceCtrl
    }).
    when('/section3',{
    	templateUrl : 'partial/SearchAirportCab',
    	controller : SearchAirportCabCtrl
    }).
    when('/section4',{
    	templateUrl : 'partial/SearchPrivateTaxi',
    	controller : SearchPrivateTaxiCtrl
    }).
    otherwise({
    	redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  }]);