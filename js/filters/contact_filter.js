angular.module('ContactsApp')
.filter('upper', function () {
  return function(input) {
    return input.toUpperCase();
  };
});