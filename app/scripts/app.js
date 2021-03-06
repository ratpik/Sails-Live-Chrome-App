/* global io */

'use strict';

io.sails.autoConnect = false;
io.sails.useCORSRouteToGetCookie = true;

/**
 * @ngdoc overview
 * @name sails-tester
 * @description
 * # sails-tester
 *
 * Main module of the application.
 */

angular
  .module('sails-tester', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'cgNotify',
    'ui.bootstrap',
    'ui.sortable',
    'jsonFormatter',
    'angular-ladda'
  ])
  .config(function ($locationProvider, $routeProvider, $provide, $compileProvider, laddaProvider) {

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);

    $routeProvider
      .when('/', {
        redirectTo: '/connect'
      })
      .when('/connect', {
        templateUrl: 'views/connect.html',
        controller: 'ConnectCtrl'
      })
      .when('/connect/:url', {
        templateUrl: 'views/connect.html',
        controller: 'ConnectCtrl'
      })
      .when('/request', {
        templateUrl: 'views/request.html',
        controller: 'RequestCtrl'
      })
      .when('/listener', {
        templateUrl: 'views/listener.html',
        controller: 'ListenerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $provide.decorator('accordionDirective', function($delegate) {
      var directive = $delegate[0];
      directive.replace = true;
      return $delegate;
    });

    laddaProvider.setOption({
      style: 'expand-left'
    });
  })
  .run(function(notify) {

    notify.config({
      startTop: 20,
      position: 'right'
    });
  });
