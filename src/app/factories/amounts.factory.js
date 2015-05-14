'use strict';

angular.module('wallet')
  .factory('Amounts', ['localStorageService', function(localStorageService){
    var amounts = {
      values: [],
      total: 0
    };

    function _persist(amountObj){
      amounts.values.push(amountObj);
      return localStorageService.set('values', amounts.values);
    }

    function _add(amount, date){
      return _persist({
        amount: amount,
        date: date,
        isPositive: true
      });

    }

    function _remove(amount, date){
      return _persist({
        amount: amount,
        date: date,
        isPositive: false
      });

    }

    function _reset () {
      localStorageService.clearAll();
      amounts.values = [];
      amounts.total = 0;
      _init();
    }

    function _init(){
      var keys = localStorageService.keys();
      if(!~keys.indexOf('values')){
        localStorageService.set('values', amounts.values);
      }else{
        amounts.values = localStorageService.get('values');
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