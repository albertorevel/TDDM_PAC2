// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('TDDMProjects', ['ionic', 'TDDMProjects.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })


  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('app.projectsDummy', {
      url: '/projectsDummy',
      views: {
        'menuContent': {
          templateUrl: 'templates/projects.html',
          controller: 'ProjectsDummyCtrl'
        }
      }
    })

  .state('app.projectDummy', {
    url: '/projectDummy/:projectId',
    views: {
      'menuContent': {
        templateUrl: 'templates/project.html',
        controller: 'ProjectDummyCtrl'
      }
    }
  })

    .state('app.projects', {
      url: '/projects',
      views: {
        'menuContent': {
          templateUrl: 'templates/projects.html',
          controller: 'ProjectsCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/projects');
});
