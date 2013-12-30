var greetings = angular.module("greetings", [])

greetings.factory("Data", function() {
    return {who : "World"}
})

function HelloController($scope, Data) {
    $scope.data = Data
    this.message = function() {
        return "Hello, " + $scope.data.who
    }
}

function GoodbyeController($scope, Data) {
    $scope.data = Data
    this.message = function () {
        return "Goodbye, " + $scope.data.who
    }
}
