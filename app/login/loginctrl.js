(function(){
    
    function loginController($scope)
    {
        var vm=this;
        vm.user={};
        //$scope.user = {};
        
       // $scope.login = function() {
        vm.login=function(){
            
            console.log(vm.user);
        }
    }
    
    
    
    angular.module("login").controller("loginCtrl",loginController);
})();