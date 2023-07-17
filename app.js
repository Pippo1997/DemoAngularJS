(function (){

    let app = angular.module('MyApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
            templateUrl: 'components/main.html',
            controller: 'myController'
        })
            .when('/post/:userid', {
                templateUrl: 'components/user.html',
                controller: 'UserController'
            })
            .otherwise({redirectTo:'/main'});
    });

}());