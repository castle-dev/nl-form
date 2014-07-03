'use strict';

/**
 * @ngdoc function
 * @name naturalLanguageFormsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the naturalLanguageFormsApp
 */
angular.module('naturalLanguageFormsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var nlform = new NLForm( document.getElementById( 'nl-form' ) );
});
