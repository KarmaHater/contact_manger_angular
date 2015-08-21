angular.module('ContactsApp')
.controller('ContactDeleteCtrl', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
  $scope.contacts.splice($routeParams.index, 1)
  $location.path('/').replace();
  
}])