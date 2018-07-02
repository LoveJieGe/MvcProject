(function () {
    var app = angular.module('movies', ['ngRoute']);
    var config = function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.when('/list', {
            templateUrl:'/Client/views/list.html'
        }).when('/details/:id', {
            templateUrl:'/Client/views/details.html'
        }).otherwise({
            redirectTo:'/list'
        })
    }
    app.config(config);
    app.constant("movieApiUrl", "/api/movie/");
}());