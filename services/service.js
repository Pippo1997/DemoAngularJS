(function (){

    let UrlId = 'https://jsonplaceholder.typicode.com/posts/';
    let UrlPhoto = 'https://jsonplaceholder.typicode.com/albums/1/photos/';

    let apiJson = function($http) {
        let getUserId = function (userid) {
            return $http.get(UrlId + userid)
                .then(function(response){
                    return response.data;
                });
        };

        let getPhoto = function () {
            return $http.get(UrlPhoto)
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getUserId: getUserId,
            getPhoto: getPhoto,
        };
    };

    let module = angular.module('MyApp');
    module.factory('apiJson', apiJson);
}());