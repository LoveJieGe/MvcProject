(function(app){
    const EditController = function ($scope, movieService) {
        $scope.isEdittable = function () {
            return $scope.edit && $scope.edit.movie;
        }
        $scope.cancel = function () {
            $scope.edit.movie = null;
        }
        $scope.save = function () {
            if ($scope.edit.movie.Id) {
                updateMovie();
            } else {
                createMovie();
            }
        }
        var updateMovie = function () {
            movieService.update($scope.edit.movie).
                then(function () {
                    angular.extend($scope.movie, $scope.edit.movie);
                    $scope.edit.movie = null;
                })
        };
        var createMovie = function () {
            movieService.create($scope.edit.movie).
                then(function (r) {
                    $scope.movies.push(r.data);
                    $scope.edit.movie = null;
                });
        }
    }
    EditController.$inject = ['$scope', 'movieService'];
    app.controller('EditController', EditController);
}(angular.module('movies')))