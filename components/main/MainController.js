(function (){

    let app = angular.module('MyApp');

    let myController = function ($scope, $location, apiJson) {

        $scope.search = function (userid) {
            $location.path('/post/' + userid)
        };

        let onPhoto = function(data){
            $scope.photos = data;
            $scope.viewby = 8;
            $scope.currentPage = 1;
            $scope.itemsPerPage = $scope.viewby;
            $scope.setItemsPerPage = function(num) {
                $scope.itemsPerPage = num;
                $scope.currentPage = 1;
            }
        }

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

        apiJson.getPhoto($scope.photos).then(onPhoto);
    };

    app.controller('myController', myController);

}());