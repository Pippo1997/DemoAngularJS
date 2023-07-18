(function (){

    let app = angular.module('MyApp');

    let myController = function ($scope, $location, apiJson) {

        $scope.search = function (userid) {
            $location.path('/post/' + userid)
        };

        let onPhoto = function(data){
            $scope.photos = data;
        };

        let onError = function (reason) {
            $scope.error = 'not found data';
        };

        apiJson.getPhoto($scope.photos).then(onPhoto, onError);
    };

    app.controller('myController', myController);

}());