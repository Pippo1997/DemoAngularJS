(function (){

    angular
        .module('MyApp')
        .controller('UserController', UserController);

    function UserController ($scope , apiJson, $routeParams, $location) {

        let onUser = function (data) {
            $scope.user = data;
        };

        let onError = function (reason) {
            $scope.error = 'User not found';
        };

        // alert
        $scope.alerts = [];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: 'Ops wrong button :P'});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
        //

        $scope.search = function () {
            $location.path('/AllUsers')
        };

        $scope.userid = $routeParams.userid;
        apiJson.getUserId($scope.userid).then(onUser, onError);
    }

}());