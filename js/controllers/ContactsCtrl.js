angular.module('ContactsApp')
.controller('ContactsCtrl', ['$scope', function ($scope) {
  $scope.contacts = [
    {name: 'Tom', number: '123-123-1245'},
    {name: 'Matt', number: '321-123-1245'},
    {name: 'Bob', number: '643-123-1245'},
    {name: 'Sue', number: '000-123-1245'},
    {name: 'Ceri', number: '000-123-1245'}
  ];
}])