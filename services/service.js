(function (){

    let UrlId = 'https://jsonplaceholder.typicode.com/users/';
    let UrlPhoto = 'https://jsonplaceholder.typicode.com/albums/1/photos/';

    angular
        .module('MyApp')
        .factory('apiJson', apiJson)

    function apiJson ($http, $q) {

        function  getAllUser() {
            return $http({
                method: 'GET',
                url: UrlId,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(SendResponse)
                .catch(SendError);
        }

        function SendResponse (response) {
            return response.data;
        }

        function SendError (response) {
            return $q.reject('error (HTTP status: ' +  response.status + ')');
        }

        function  getUserId(userid) {
            return $http({
                method: 'GET',
                url: UrlId + userid,
            })
                .then(SendResponse)
                .catch(SendError);
        }

        function  updateUser(user) {
            return $http({
                method: 'PUT',
                url: UrlId + user.id,
                data: user,
            })
                .then(UpdateSuccess)
                .catch(UpdateError);
        }

        function UpdateSuccess (response) {
            return 'User updated: ' + response.config.data.name;
        }

        function UpdateError (response) {
            return $q.reject('error updating user (HTTP status: ' +  response.status + ')');
        }

        function addUser (newUser) {
            return $http({
                method: 'POST',
                url: UrlId,
                data: newUser,
            })
                .then(addUserSuccess);
        }

        function addUserSuccess(response) {
            return 'User added: ' + response.config.data.name;
        }

        let getPhoto = function () {
            return $http.get(UrlPhoto)
                .then(function(response){
                    return response.data;
                });
        }

        return {
            getUserId: getUserId,
            getAllUser: getAllUser,
            getPhoto: getPhoto,
            updateUser: updateUser,
            addUser: addUser,
        };
    }

}());