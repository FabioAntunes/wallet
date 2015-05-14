'use strict';

angular.module('wallet')
  .factory('Currency', ['localStorageService', function(localStorageService){
    var _currenciesOptions = {
      currencies: [
        {
          id: 1,
          html: 'fa fa-eur',
          name: 'Euro'
        },
        {
          id: 2,
          html: 'fa fa-btc',
          name: 'Bitcoin'
        },
        {
          id: 3,
          html: 'fa fa-yen',
          name: 'Yen'
        },
        {
          id: 4,
          html: 'fa fa-try',
          name: 'Turkish Lira'
        },
        {
          id: 5,
          html: 'fa fa-rub',
          name: 'Ruble'
        },
        {
          id: 6,
          html: 'fa fa-ils',
          name: 'Israeli New Sheqel'
        },
        {
          id: 7,
          html: 'fa fa-usd',
          name: 'American Dollar'
        },
        {
          id: 8,
          html: 'fa fa-gbp',
          name: 'British Pound'
        },
        {
          id: 9,
          html: 'fa fa-won',
          name: 'South Korean Won'
        }
      ],
      currentCurrency: {}
    }
    
    function _persist(currencyId){
      _currenciesOptions.currencies.forEach(function(value){
        if(value.id === currencyId){
          _currenciesOptions.currentCurrency = value;
          return localStorageService.set('currency', value);
        }
      })
    }

    function _init(){
      var keys = localStorageService.keys();
      if(!~keys.indexOf('currency')){
        localStorageService.set('currency', _currenciesOptions.currencies[Math.floor(Math.random()*_currenciesOptions.currencies.length)]);
      }
      
      _currenciesOptions.currentCurrency = localStorageService.get('currency');
    }

    return {
      currenciesOptions: _currenciesOptions,
      persist: _persist,
      init: _init
    };
  }]);