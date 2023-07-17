(function (){

    let url = 'https://jsonplaceholder.typicode.com/posts/';

    let apiJson = function($http) {
        let getUserId = function (userid) {
            return $http.get(url + userid)

                .then(function(response){
                    return response.data;
                });
        };

        return {
            getUserId: getUserId,
        };
    };

    let module = angular.module('MyApp');
    module.factory('apiJson', apiJson);
}());