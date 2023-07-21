(function (){

    let app = angular.module('MyApp', ['ngRoute','ui.bootstrap' ]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
            templateUrl: 'components/main/main.html',
            controller: 'myController'
        })
            .when('/user/:userid', {
                templateUrl: 'components/user/user.html',
                controller: 'UserController'
            })
            .otherwise({redirectTo:'/main'});
    });

}());