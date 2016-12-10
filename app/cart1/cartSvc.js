(function(){
    
        function cartSvcFn(){
            var cartItems=[];
            
            this.addCartItems= function(data){
                cartItems.push(data);
                 console.log(cartItems);
                
            };
            
            this.getCartItems=function(){
                return cartItems;
            };
            
           this.removeItems = function(data){
                var index=cartItems.indexOf(data);
               cartItems.splice(index,1);
                    
            };
            
            
            
            
        }
    
    
    angular.module("cart").service("cartSvc",[cartSvcFn]);
})();