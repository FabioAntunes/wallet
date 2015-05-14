'use strict';

angular.module('wallet')
  .controller('MainCtrl', function ($scope, Amounts, Currency, $modal) {
    $scope.amounts = Amounts.values;
    $scope.currencies = Currency.currenciesOptions.currencies;
    $scope.currentCurrency = Currency.currenciesOptions.currentCurrency;

    var amountModal = $modal({
      scope: $scope,
      template: 'app/components/modals/modal.amount.html',
      show: false,
      animation: 'am-fade-and-scale'
    });

    var currencyModal = $modal({
      scope: $scope,
      template: 'app/components/modals/modal.currency.html',
      show: false,
      animation: 'am-fade-and-scale'
    });

    $scope.showModalAddIncome = function(){
      amountModal.$promise.then(amountModal.show);
    };

    $scope.showCurencyAmount = function(){
      currencyModal.$promise.then(currencyModal.show);
    };

    $scope.countTotal = function(value){
      $scope.amounts.total +=  value;
    }
  });
