(function (){

    angular
        .module('MyApp')
        .controller('ModalInstanceController', ModalInstanceController);

    function ModalInstanceController ($scope, $uibModalInstance) {
        $scope.closeModal = function() {
            $uibModalInstance.close();
        };
    }
}());