angular.module('ContactsApp')
.controller('ContactEditCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.contact = $scope.contacts[$routeParams.index];
  $scope.index = $routeParams.index;
  $scope.submitForm = function() {
    $scope.contact.name = $scope.name;
    $scope.contact.number = $scope.number;
    $scope.name=""
    $scope.number=""
  }
}])