(function (){

    let app = angular.module('MyApp');

    let UserController = function ($scope , apiJson, $routeParams) {

        let onUser = function (data) {
            $scope.user = data;
        };

        let onError = function (reason) {
            $scope.error = 'not found data';
        };

        $scope.userid = $routeParams.userid;
        apiJson.getUserId($scope.userid).then(onUser, onError);
    };

    app.controller('UserController', UserController);

}());