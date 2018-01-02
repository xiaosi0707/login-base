/**
 * Created by wyunfei on 2017/12/27.
 */
var demoApi = angular.module('center');

demoApi.service('demo', function ($http) {
    this.getCode = function (/*参数*/) {
        var args = 'url';   // 请求的API
        return $http.post(args);
    };
});
