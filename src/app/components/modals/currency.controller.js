'use strict';

angular.module('wallet')
  .controller('CurrencyCtrl', function ($scope, Currency) {

    $scope.formCurrency = $scope.currentCurrency.id;


    $scope.submitCurrency = function(teste){
      Currency.persist($scope.currencyForm.innerForm.currency.$modelValue);
      $scope.$hide();
    }
  });
