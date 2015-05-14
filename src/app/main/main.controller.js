'use strict';

angular.module('wallet')
  .controller('MainCtrl', function ($scope, Amounts, $modal) {
    $scope.amounts = Amounts.values;    

    var amountModal = $modal({
      scope: $scope,
      template: 'app/partials/modal.amount.html',
      show: false,
      animation: 'am-fade-and-scale'
    });

    var currencyModal = $modal({
      scope: $scope,
      template: 'app/partials/modal.currency.html',
      show: false,
      animation: 'am-fade-and-scale'
    });

    $scope.showModalAddIncome = function(){
      amountModal.$promise.then(amountModal.show);
    };

    $scope.showCurencyAmount = function(){
      currencyModal.$promise.then(currencyModal.show);
    };

  });
