/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.hr')
      .service('CorporationService', CorporationService);

  /** @ngInject */
  function CorporationService($http, $q) {
    this.corporations = function(pageNum, pageSize, predicateObject){
      var deferred = $q.defer(); 
      $http.get('http://192.168.108.1:8080/api/corporation/page?pageNum=' + pageNum + '&pageSize=' + pageSize) 
        .success(function(data) { 
          deferred.resolve(data); 
        })
        .error(function(reason) { 
          console.log(reason);
          deferred.reject(reason); 
        })
        return deferred.promise; 
      }
  }

})();
