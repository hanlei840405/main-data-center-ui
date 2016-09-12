/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.hr')
      .controller('CorporationAddCtrl', CorporationAddCtrl);

  /** @ngInject */
  function CorporationAddCtrl($scope, $uibModal, CorporationService) {
    $scope.province='';
    $scope.corporationForm={};
    var promise = CorporationService.provinces();
    promise.then(function(data){
      $scope.provinces = data;
      }, function error(msg) {
      console.error(msg);
    });

    $scope.cities = function(province){
      var promise = CorporationService.cities(province);
      promise.then(function(data){
        $scope.provinces = data;
        }, function error(msg) {
        console.error(msg);
      });
    };
  }

})();
