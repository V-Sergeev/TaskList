; angular.module('appTasks',[]);
          
          angular.module('appTasks').
          directive('myDir', function(){
            return {
              scope: true,
              restrict: 'E',
              link: function(scope){
                scope.tasks=[];
                scope.hide=false;
                scope.addTask=function(){
                  scope.tasks.push(scope.task);
                  scope.task='';
                };
                scope.showTasks=function(){
                  alert(scope.tasks);
                };
              }
            };
          });
          