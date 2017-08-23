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

         .state('EPYM',{
            url: '/EPYM',
            templateUrl : 'views/EPYM.html'
         })

          .state('EPGBM',{
            url: '/EPGBM',
            templateUrl : 'views/EPGBM.html'
         })

           .state('EPLM',{
            url: '/EPLM',
            templateUrl : 'views/EPLM.html'
         })
//EPBA
         .state('EPBA',{
            url: '/EPBA',
            templateUrl : 'views/EPBA.html'
         })
         //EPGCMM

        .state('EPGCMM',{
            url: '/EPGCMM',
            templateUrl : 'views/EPGCMM.html'
         })
//EPGCSM

 .state('EPGCSM',{
            url: '/EPGCSM',
            templateUrl : 'views/EPGCSM.html'
         })
         .state('EPSM',{
            url: '/EPSM',
            templateUrl : 'views/EPSM.html'
         })

         .state('EPHRM',{
            url: '/EPHRM',
            templateUrl : 'views/EPHRM.html'
         })

          .state('EPBMI',{
            url: '/EPBMI',
            templateUrl : 'views/EPBMI.html'
         })

         .state('EPIB',{
            url: '/EPIB',
            templateUrl : 'views/EPIB.html'
         })
//PGCBM
.state('PGCBM',{
            url: '/PGCBM',
            templateUrl : 'views/PGCBM.html'
         })
         //PGCHRM
         .state('PGCHRM',{
            url: '/PGCHRM',
            templateUrl : 'views/PGCHRM.html'
         })//CPHRD
         .state('CPHRD',{
            url: '/CPHRD',
            templateUrl : 'views/CPHRD.html'
         })
         //EPGDIB
         .state('EPGDIB',{
            url: '/EPGDIB',
            templateUrl : 'views/EPGDIB.html'
         })//EPGDM
         .state('EPGDM',{
            url: '/EPGDM',
            templateUrl : 'views/EPGDM.html'
         })
         //CPCSM
         .state('CPCSM',{
            url: '/CPCSM',
            templateUrl : 'views/CPCSM.html'
         })
         //CPRSCSM
         .state('CPRSCSM',{
            url: '/CPRSCSM',
            templateUrl : 'views/CPRSCSM.html'
         })//CSM
         .state('CSM',{
            url: '/CSM',
            templateUrl : 'views/CSM.html'
         })//contactus.html
         .state('contactus',{
            url: '/contactus',
            templateUrl : 'views/contactus.html'
         })
        .state('executive-programs',{
            url : '/executive-programs',
            templateUrl : 'views/executive-programs.html'
        });

        $locationProvider.html5Mode(true);

});