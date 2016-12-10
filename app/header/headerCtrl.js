(function () {
    function headerCtrl($scope,lookupSvc) {
        //$scope.navItems =["Home","Login","Register"];
        $scope.navItems = lookupSvc.getNavItems();
      //  $scope.navItems = lookupSvc.getNavItems();
       /* $scope.navItems = [{
                name: "Home",
                templateUrl: "app/home/home.html"
        },
            {
                name: "Login",
                templateUrl: "app/login/login.html"
        }, {
                name: "Register",
                templateUrl: "app/register/register.html"
        }];*/
        $scope.brandName = "FlipSnap";
        //$scope.headerUrl = "app/header/header.html";
      
        $scope.cartItems = 0;
        
        $scope.$on("ITEM-ADDED",function(evt,args){   
                    //console.log(args);
                   
                   $scope.cartItems++ });
        
        $scope.$on("ITEM-REMOVED",function(evt,args){   
                    console.log(args);
                   
                   $scope.cartItems-- });
        
        $scope.loadPage = function (data) {
            
            $scope.contentUrl=data.templateUrl;
        }
    }


    angular.module("header").controller("headerCtrl", headerCtrl);

})();
