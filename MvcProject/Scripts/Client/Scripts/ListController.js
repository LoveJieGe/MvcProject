(function (app) {
    let ListController = function ($scope, $http) {
        $http.get('/api/movie').
            then(function (r) {
                $scope.movies = r.data;
            })
    }
    ListController.$inject = ['$scope','$http']
    app.controller('ListController', ListController);
}(angular.module('movies')));