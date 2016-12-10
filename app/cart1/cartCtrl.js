(function(){
    
    
        function cartCtrlFn($scope,cartSvc){
            
            $scope.cartItems=cartSvc.getCartItems().length;
            $scope.cartItemsList=cartSvc.getCartItems();           
            
        }
    
    angular.module("cart").controller("cartCtrl",["$scope", "cartSvc",cartCtrlFn]);
})();