'use strict';

/**
 * @ngdoc function
 * @name clientUserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientUserApp
 */
angular.module('clientUserApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });