(function (){

    angular
        .module('MyApp')
        .controller('AllUserController', AllUserController);

    function AllUserController ($scope , apiJson) {

        let onUsers = function (data) {
            $scope.users = data;
        };

        apiJson.getAllUser($scope.users).then(onUsers);
    }

}());