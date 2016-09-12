/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.hr')
      .controller('CorporationCtrl', CorporationCtrl);

  /** @ngInject */
  function CorporationCtrl($scope, $uibModal, CorporationService) {
    $scope.smartTablePageSize = 10;

    $scope.pipeFunction = function(tableState){
      var pagination = tableState.pagination;

      var start = pagination.start || 0;     // This is NOT the page number, but the index of item in the list that you want to use to display the table.
      var number = pagination.number || 10;  // Number of entries showed per page.
      var promise = CorporationService.corporations(start, number, tableState.search.predicateObject);
      promise.then(function(data){
        $scope.corporations = data.content;
        tableState.pagination.numberOfPages = 2;
        }, function error(msg) {
        console.error(msg);
      });
  
    };

    $scope.headCheck = false;
    $scope.checkMe = function(target, idx){
      if(target.target.value == 'on') {
        angular.forEach($scope.corporations, function(corporation){
          corporation.checked=target.target.checked;
        });
      }else {
        $scope.corporations[idx].checked = target.target.checked;
      }
      angular.forEach($scope.corporations, function(corporation){
          $scope.headCheck = corporation.checked;
          if(!corporation.checked) {
            return;
          }
      });
    };
    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        controller: 'CorporationAddCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };

  }

})();
