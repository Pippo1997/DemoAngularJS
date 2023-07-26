(function (){

    angular
        .module('MyApp')
        .controller('AddUserController', AddUserController);

    function AddUserController (apiJson, $location, $log) {

        let vm = this;

        vm.newUser = {};

        vm.addUser = function () {
            apiJson.addUser(vm.newUser)
                .then(addUserSuccess)
        }

        function addUserSuccess(mex) {
            $log.info(mex);
            $location.path('/AllUsers')
        }

    }

}());