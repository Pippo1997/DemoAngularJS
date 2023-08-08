(function (){

    let UrlId = 'https://jsonplaceholder.typicode.com/users/';
    let UrlPhoto = 'https://jsonplaceholder.typicode.com/albums/1/photos/';

    angular
        .module('MyApp')
        .factory('apiJson', apiJson)

    function apiJson ($http, $q) {

        //  funzione che recupera tutto l'array user
        function  getAllUser() {
            return $http.get(UrlId)
                .then(SendResponse)
                .catch(SendError)
        }

        function SendResponse (response) {
            return response.data;
        }

        function SendError (response) {
            return $q.reject('error (HTTP status: ' +  response.status + ')');
        }
        // fine

        //  funzione che recupera gli user ID e utilizza le stesse risposte dellaa funzione precedente
        function  getUserId(userid) {
            return $http.get(UrlId + userid)
                .then(SendResponse)
                .catch(SendError);
        }
        // fine

        //  funzione che permette di modificare l'array user
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
        // fine

        // funzione che permette di aggiungere elementi all'array user
        function addUser (newUser) {
            return $http.post(UrlId, newUser)
                .then(addUserSuccess);
        }

        function addUserSuccess(response) {
            return 'User added: ' + response.config.data.name;
        }
        // fine

        // fuznione che recupere l'array delle foto
        let getPhoto = function () {
            return $http.get(UrlPhoto)
                .then(function(response){
                    return response.data;
                });
        }
        // fine

        return {
            getUserId: getUserId,
            getAllUser: getAllUser,
            getPhoto: getPhoto,
            updateUser: updateUser,
            addUser: addUser,
        };
    }

}());