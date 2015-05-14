'use strict';

angular.module('wallet')
.directive('validAmount', function() {

  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.validAmount = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        if (scope.amountType || !scope.amountType && scope.amounts.total - modelValue > 0 ) {
          return true;
        }

        return false;
      };

      return scope.$watch('amountType', function(){
        return ctrl.$validate();
      });
    }
  };
});