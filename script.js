;
angular.module('appTasks', []);

angular.module('appTasks').
directive('myDir', function() {
  return {
    scope: true,
    restrict: 'E',
    link: function(scope) {
      scope.tasks = [];
      scope.st = "yes-no";
      
      scope.addTask = function() {
        console.log(scope.task);
        if (!!scope.task.date && !!scope.task.name) {
          scope.task.status = "yes";
          scope.tasks.push(scope.task);
          scope.task = "";
         // console.log(scope.tasks);
        }
      };
      scope.showTasks = function() {
      console.log(scope.tasks);
      };
    }
  };
});