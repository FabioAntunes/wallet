'use strict';

angular.module('wallet', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'mgcrea.ngStrap', 'LocalStorageModule'])
  .config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');

    localStorageServiceProvider.setPrefix('wallet');
  }).run(function (Amounts){
    Amounts.init();  	
  })
;
