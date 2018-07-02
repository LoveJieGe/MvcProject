(function (app) {
    const DetailController = function ($scope, $routeParams ,movieService) {
        const id = $routeParams.id;
        movieService.getById(id).
            then(function (r) {
                $scope.movie = r.data;
            });
        $scope.edit = function () {
            $scope.edit.movie = angular.copy($scope.movie);
        }
    }
    DetailController.$inject = ['$scope','$routeParams','movieService'];
    app.controller('DetailsController', DetailController);
}(angular.module('movies')))