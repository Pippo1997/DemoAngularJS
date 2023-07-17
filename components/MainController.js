(function (){

    let app = angular.module('MyApp');

    let myController = function ($scope, $location) {

        $scope.search = function (userid) {
            $location.path('/post/' + userid)
        };

        $scope.userid = '1';
    };

    app.controller('myController', myController);

}());