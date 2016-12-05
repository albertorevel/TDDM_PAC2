angular.module('TDDMProjects.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})


.controller('ProjectsDummyCtrl', function($scope, $http) {


  $scope.projects = [
    { name: 'Reggae', id: 1 },
    { name: 'Chill', id: 2 },
    { name: 'Dubstep', id: 3 },
    { name: 'Indie', id: 4 },
    { name: 'Rap', id: 5 },
    { name: 'Cowbell', id: 6 }
  ];


})

.controller('ProjectDummyCtrl', function($scope, $stateParams) {
  $scope.msg = "A project";

})


.controller('ProjectsCtrl', function($scope, $http) {



   var req = {
      method: 'GET',
      url: 'https://api.github.com/users/uocappseimt/repos',
      headers: {
        'Content-Type': 'application/json'
      }      
    };
    $http(req).then(function successCallback(res) {
      console.log(res);

      $scope.projects= res.data;
//      defer.resolve(res.data.result);
    }, 
    function errorCallback(error) {
        // error
    });

});

