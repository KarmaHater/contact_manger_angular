angular.module('ContactsApp')
.controller('ContactAddCtrl', ['$scope', function ($scope) {
  $scope.submitForm = function() {
    $scope.contacts.push({
      name: $scope.name,
      number: $scope.number
    })
    $scope.name=""
    $scope.number=""
  }
}])