'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){
  $scope.addTask = function(task){
    var o = {
      title: task.title,
      dueDate: task.dueDate.getTime(),
      priority: task.priority,
      isComplete: false,
      createAt: $window.Firebase.ServerValue.TIMESTAMP
    };

    console.log(o);
    Task.add(o)
    .then(function(data){
      console.info('data', data);
    });
  };
}]);
