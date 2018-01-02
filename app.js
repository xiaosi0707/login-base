/**
 * Created by wyunfei on 2017/12/26.
 */
(function () {
    'use strict';

    var app = angular.module('myApp', [
        'ui.router',
        'center',
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('demo', {
                url: '/demo',
                templateUrl: '../components/center/templates/demo.html'
            });

            // 如果找不到，走这里
            $urlRouterProvider.otherwise('/demo');
    });
})();
