'use strict';

angular.module('wallet')
  .controller('NavbarCtrl', function ($scope, Amounts, Currency) {
    $scope.reset = function(){
    	if(confirm('Are you sure about it?')){
    		Amounts.reset(); 		
    		Currency.init(); 		
    	}
    };
  });
