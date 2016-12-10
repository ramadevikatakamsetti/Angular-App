(function(){
    
    function productCtrl($scope,$rootScope,productFactory,cartSvc) {
        
        $scope.vehicleList=productFactory.vehicles();
       // $scope.productList = productSvc.getProducts();
        
        $scope.addToCart = function(item){
            
            item.selected = true;
            $rootScope.$broadcast("ITEM-ADDED",{vehicle:item});
            cartSvc.addCartItems(item);
        };
        
        $scope.removeCart=function(item){
            
            item.selected=false;
            $rootScope.$broadcast("ITEM-REMOVED",{vehicle:item});
            cartSvc.removeItems(item);
        }
        
        
        $scope.recordCount = 4;
       
        productFactory.vehicles()
                    .then(function(res)
             {
            $scope.vehicleList=res.data.vehicles;
        
           // console.log($scope.vehicleList);
            
        }).catch(function(errorMsg){
            $scope.showError=true;
        });
        
        $scope.sortByOrder = function() {
          if ($scope.orderByPrice=="Price"){
                  $scope.orderByPrice="-Price";
              }
            else{
                    $scope.orderByPrice="Price";
                }
        }
        $scope.showMore = function() {
            $scope.recordCount += 4;
            
        };
        $scope.showLess = function() {
            if($scope.recordCount==4){
                alert("hi");
            }else 
            if($scope.recordCount > 4) {
                    $scope.recordCount -= 4;
            }
            
        }
       

    }
    
    angular.module("product").controller("productCtrl",["$scope", "$rootScope","productFactory","cartSvc", productCtrl])
})();