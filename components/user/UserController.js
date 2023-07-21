(function (){

    let app = angular.module('MyApp');

    let UserController = function ($scope , apiJson, $routeParams) {

        let onUser = function (data) {
            $scope.user = data;
        };

        let onError = function (reason) {
            $scope.error = 'not found data';
        };

        $scope.alerts = [];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: 'Ops wrong button :P'});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.userid = $routeParams.userid;
        apiJson.getUserId($scope.userid).then(onUser, onError);
    };

    app.controller('UserController', UserController);

}());