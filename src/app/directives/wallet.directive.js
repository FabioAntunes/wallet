'use strict';

angular.module('wallet')
.directive('walletDir', ['$modal', function($modal) {

  function link(scope, element, attrs) {
    var myOtherModal = $modal({scope: scope, template: 'modal/modal.amount.tpl.html', show: false, animation: 'am-fade-and-scale'});
    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    // $scope.showModal = function() {
    //   myOtherModal.$promise.then(myOtherModal.show);
    // };

    element.on('click', function() {
      // myOtherModal.$promise.then(myOtherModal.show);
      $modal({title: 'My Title', content: 'My Content', show: true, animation: 'am-fade-and-scale'});
    });

  }

  return {
    link: link
  };
}]);