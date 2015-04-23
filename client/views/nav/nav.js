'use strict';

angular.module('checklist')
.controller ('NavCtrl', ['$scope', 'User', '$state', function ($scope, User, $state) {

  $scope.afAuth.$onAuth(function(authData) {
    if (authData) {
      //do something later??
    } else {
      $state.go('home');
      console.log('logged out');
    }
  });

  $scope.logout = function(){
    User.logout();
  };
}]);