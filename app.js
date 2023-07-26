(function (){

    angular
        .module('MyApp', ['ngRoute','ui.bootstrap' ])
        .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'components/main/main.html',
                controller: 'myController',
            })
            .when('/user/:userid', {
                templateUrl: 'components/user/user.html',
                controller: 'UserController',
            })
            .when('/AllUsers', {
                templateUrl: 'components/user/allUser/AllUser.html',
                controller: 'AllUserController',
            })
            .when('/AddUsers', {
                templateUrl: 'components/user/addUser/AddUser.html',
                controller: 'AddUserController',
                controllerAs: 'Add',
            })
            .when('/EditUsers/:userid', {
                templateUrl: 'components/user/editUser/EditUser.html',
                controller: 'EditUserController',
                controllerAs: 'Edit',
            })
            .otherwise({redirectTo:'/home'});
    });

}());