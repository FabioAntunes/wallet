'use strict';

angular.module('wallet')
  .controller('NavbarCtrl', function ($scope, Amounts) {
    $scope.reset = function(){
    	if(confirm('Are you sure about it?')){
    		Amounts.reset();    		
    	}
    }
  });
