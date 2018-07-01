(function (app) {
    let ListController = function ($scope, movieService) {
        debugger
        movieService.getAll().
            then(function (r) {
            $scope.movies = r.data;
        });
    }
    ListController.$inject = ['$scope','movieService']
    app.controller('ListController', ListController);
}(angular.module('movies')));