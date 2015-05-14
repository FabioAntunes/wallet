'use strict';

angular.module('wallet')
  .controller('ModalCtrl', function ($scope, Amounts) {
    $scope.amounts = Amounts.values;

    $scope.amount = null;
    $scope.date = null;
    $scope.amountType = true;

    $scope.persistAmount = function(){
      Amounts.add($scope.amount, $scope.date);
    };

    $scope.calcTotal = function(amountInput){
      var amount = amountInput.$error.validAmount && !amountInput.$pristine ? amountInput.$viewValue : $scope.amount;
      return $scope.amountType ? $scope.amounts.total + $scope.amount : $scope.amounts.total - amount;
    };

  });
