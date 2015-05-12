'use strict';

angular.module('wallet')
  .factory('Amounts', ['localStorageService', function(localStorageService){
    var amounts = {
      income: [],
      expense: [],
      total: 0
    };

    function _persist(amountObj, type){
      amounts[type].push(amountObj);
      return localStorageService.set(type, amounts[type]);
    }

    function _add(amount, date){
      return _persist({
        amount: amount,
        date: date,
        isPositive: true
      }, 'income');

    }

    function _remove(amount, date){
      return _persist({
        amount: amount,
        date: date,
        isPositive: false
      }, 'expense');

    }

    function _reset () {
      localStorageService.clearAll();
    }

    function _init(){
      var keys = localStorageService.keys();
      if(keys['expense'] === undefined){
        localStorageService.set('expense', amounts.expense);
      }

      if(keys['expense'] === undefined){
        localStorageService.set('income', amounts.income);
      }

    }

    return {
      add: _add,
      remove: _remove,
      values: amounts,
      reset: _reset,
      init: _init
    };
  }]);