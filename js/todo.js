angular.module('Todo', [])
    .controller('todoController', ['$scope', function ($scope) {
        $scope.todos = [
            {
                'title': 'Duc Anh Todos',
                'done': false
            }
        ];

        $scope.addTask = function () {
            $scope.todos.push({
                'title': $scope.newTask
            })
        };
        $scope.clearCompletedTasks = function () {
            $scope.todos = $scope.todos.filter(function (task) {
                return !task.done;
            })
        };
}])