(function(){
'use strict';
  angular.module('myFirstApp',[])

  .controller('myFirstController',function($scope){
   $scope.name="shyam";
   $scope.sayHello=function() {
     return "Hello Coursera!";
   };
  });
})();
