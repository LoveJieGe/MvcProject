(function (app) {
    const DetailController = function ($scope, $http, $routeParams) {
        debugger
        const id = $routeParams.id;
        $http.get(`/api/Movie/${id}`)
            .then(function (r) {
                $scope.movie = r.data;
            });
    }
    DetailController.$inject = ['$scope', '$http', '$routeParams'];
    app.controller('DetailsController', DetailController);
}(angular.module('movies')))