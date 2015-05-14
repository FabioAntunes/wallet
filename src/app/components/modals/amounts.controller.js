'use strict';

angular.module('wallet')
  .controller('AmountsCtrl', function ($scope, Amounts) {

    $scope.amount = null;
    $scope.date = null;
    $scope.amountType = true;

    $scope.submitAmount = function(){
      $scope.amountType ? Amounts.add($scope.amount, $scope.date) : Amounts.remove($scope.amount, $scope.date);
      $scope.$hide();
    };

    $scope.calcTotal = function(amountInput){
      var amount = amountInput.$error.validAmount && !amountInput.$pristine ? amountInput.$viewValue : $scope.amount;
      return $scope.amountType ? $scope.amounts.total + $scope.amount : $scope.amounts.total - amount;
    };

  });
