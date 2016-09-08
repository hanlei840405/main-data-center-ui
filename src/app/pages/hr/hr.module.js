(function () {
  'use strict';

  angular.module('BlurAdmin.pages.hr', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
  	$stateProvider.state('hr', {
          url: '/hr',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: '人资主数据',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 200,
          },
        }).state('hr.corporation', {
          url: '/corporation',
          templateUrl: 'app/pages/hr/corporation/corporation.html',
          title: '企业信息',
          controller: 'CorporationCtrl',
          sidebarMeta: {
            order: 0,
          },
    });
  }

})();