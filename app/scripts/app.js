'use strict';

angular.module('uiUtilsScrollfixDemoApp', [
  'ngRoute', 'ui.utils'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page1', {
        templateUrl: 'views/page1.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
