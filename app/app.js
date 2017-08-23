var careershine = angular.module('careershine', ['ui.router','ngMaterial']);

careershine.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

       
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })

        
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'    
        })

         .state('EPBM', {
            url: '/EPBM',
            templateUrl: 'views/EPBM.html'    
        })

        .state('executive-programs',{
            url : '/executive-programs',
            templateUrl : 'views/executive-programs.html'
        });

        $locationProvider.html5Mode(true);

});