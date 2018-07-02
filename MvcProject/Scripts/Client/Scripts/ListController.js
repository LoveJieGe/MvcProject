(function (app) {
    let ListController = function ($scope, $location, movieService) {
        movieService.getAll().
            then(function (r) {
            $scope.movies = r.data;
            });
        $scope.delete = function (movie) {
            movieService.delete(movie).
                then(function () {
                    removeMovieById(movie.Id);
                })
        }
        const removeMovieById = function (id) {
            for (let i = 0, len = $scope.movies.length; i < len; i++) {
                const x = $scope.movies[i];
                if (x.Id == id) {
                    $scope.movies.splice(i, 1);
                    break;
                }
            }
        }
        $scope.create = function () {
            $scope.edit = {
                movie: {
                    Title: '',
                    ReleaseYear: new Date().getFullYear(),
                    Runtime: 0
                }
            }
        }
    }
    ListController.$inject = ['$scope','$location','movieService']
    app.controller('ListController', ListController);
}(angular.module('movies')));