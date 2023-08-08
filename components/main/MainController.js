(function (){

    angular
        .module('MyApp')
        .controller('myController', myController);

    function myController ($scope, $location, apiJson, $uibModal) {

        // funzioni con RxJS per salvare dati input tramite localstorage
        const useridSubject = new rxjs.Subject();

        useridSubject.subscribe(userid => {
            console.log('Saving userid:', userid);
            localStorage.setItem('userid', userid);
        });

        const storedUserId = localStorage.getItem('userid');
        if (storedUserId) {
            useridSubject.next(storedUserId);
        }

        useridSubject.subscribe(userid => {
            $scope.userid = userid;
        });

        $scope.updateUserId = function(userid) {
            useridSubject.next(userid);
        };

        $scope.loadUserId = function() {
            const storedUserId = localStorage.getItem('userid');
            return storedUserId || '';
        };

        // mi permette di andare in un altra pagina che mi fa vedere in dettaglio lo user che sleziono inserendo l'id
        $scope.search = function (userid) {
            $location.path('/user/' + userid)
            console.log('Searching for user with ID:', userid);
        };

        // pagination
        let onPhoto = function(data){
            $scope.photos = data;
            $scope.viewby = 8;
            $scope.currentPage = 1;
            $scope.itemsPerPage = $scope.viewby;
            $scope.setItemsPerPage = function(num) {
                $scope.itemsPerPage = num;
            }
        }

        //  carosello
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        let slides = $scope.slides = [];
        let currIndex = 0;

        $scope.addSlide = function() {
            let newWidth = 600 + slides.length + 1;
            slides.push({
                image: '//unsplash.it/' + newWidth + '/300',
                id: currIndex++
            });
        };

        for (let i = 0; i < 4; i++) {
            $scope.addSlide();
        }

        // modale che si apre all'avvio della pagina
        $uibModal.open({
            templateUrl: 'components/main/myModalContent.html', // Template HTML del contenuto modale
            controller: 'ModalInstanceController'
        });

        // prendo l'url dal services delle foto da stampare a video
        apiJson.getPhoto($scope.photos).then(onPhoto);
    }

}());