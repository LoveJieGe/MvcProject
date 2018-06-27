(function () {
    var app = angular.module('movies', ['ngRoute']);
    var config = function ($routeProvider) {
        debugger
        $routeProvider.when('/list', {
            templateUrl:'/Client/views/list.html'
        }).when('/details/:id', {
            templateUrl:'/Client/views/details.html'
        }).otherwise({
            redirectTo:'/list'
        })
    }
    app.config(config);
}());