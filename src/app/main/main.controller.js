'use strict';

angular.module('wallet')
  .controller('MainCtrl', function ($scope, Amounts, $modal) {
    $scope.amounts = Amounts.values;

    $scope.amount = null;
    $scope.date = null;

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
      $scope.title = 'Add amount'
      amountModal.$promise.then(amountModal.show);
    }

    $scope.showModalAddExpense = function(){
      $scope.title = 'Remove amount'
      amountModal.$promise.then(amountModal.show);
    }

    $scope.showCurencyAmount = function(){
      currencyModal.$promise.then(currencyModal.show);
    }

    $scope.persistAmount = function(){
      Amounts.add($scope.amount, $scope.date);
    }

  });
