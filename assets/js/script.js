// On déclare un module 'schoolApp' grace à fonction angular
var schoolApp = angular.module('schoolApp',[]);
// On déclare le controlleur qu'on rattache au module
// 'studentsCtrl' est le nom du controlleur
// $scope est un paramètre du controlleur et fait la liaison entre JS et html
schoolApp.controller('studentsCtrl',function($scope){
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
});
