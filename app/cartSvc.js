(function(){
    
        function cartSvcFn(){
            var cartItems={}
            
            this.addCartItems= function(data){
                cartItems.push(data);
        
            }
            
           
            
            this.getCartItems=function(){
                return cartItems;
            }
            
            
            
            
        }
    
    
    angular.module("cartnew").service("cartSvc",[cartSvcFn]);
})();