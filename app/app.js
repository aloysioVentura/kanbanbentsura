var appModule = angular
    .module("app",[]);
    
    appModule.controller("hello", function($scope){
        

        $scope.JSON = JSON;
     })