'use strict';

angular.module('wallet')
  .controller('CurrencyCtrl', function ($scope, Currency) {

    $scope.formCurrency = $scope.currenciesOptions.currentCurrency.id;


    $scope.submitCurrency = function(){
      Currency.persist($scope.currencyForm.innerForm.currency.$modelValue);
      $scope.$hide();
    }
  });
