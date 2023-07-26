(function (){

    angular
        .module('MyApp')
        .controller('EditUserController', EditUserController);

    function EditUserController ($routeParams, apiJson, $log, $location) {

        let vm = this;

       function getUserSuccess(user) {
           vm.currentUser = user;
       }

        function getUserError(reason) {
           $log.error(reason);
        }

        function UpdateSuccess(mex) {
            $log.info(mex);
            $location.path('/AllUsers')
        }

        function UpdateError(errormex) {
            $log.error(errormex);
        }

        vm.saveUser = function () {
            apiJson.updateUser(vm.currentUser)
                .then(UpdateSuccess)
                .catch(UpdateError);
        };

        apiJson.getUserId($routeParams.userid).then(getUserSuccess).catch(getUserError);
    }

}());