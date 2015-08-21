angular.module('ContactsApp')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/index.html',
  })
  .when('/contacts/:index', {
    templateUrl: 'templates/contact_form.html',
    controller: 'ContactEditCtrl'
  })
  .when('/add', {
    templateUrl: 'templates/contact_form.html',
    controller: 'ContactAddCtrl'
  })
  .when('/delete/:index', {
    templateUrl: 'templates/contact_form.html',
    controller: 'ContactDeleteCtrl'
  })
}])