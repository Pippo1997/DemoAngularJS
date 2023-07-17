(function (){

    let app = angular.module('MyApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
            templateUrl: 'components/main/main.html',
            controller: 'myController'
        })
            .when('/post/:userid', {
                templateUrl: 'components/user/user.html',
                controller: 'UserController'
            })
            .otherwise({redirectTo:'/main'});
    });

}());