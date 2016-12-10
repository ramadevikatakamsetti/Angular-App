(function(){
    
    angular.module("shoes").controller("shoeCartCtrl",["$scope","shoeSvc",function($scope,shoeSvc){
        
         shoeSvc.shoes()
                    .then(function(res)
             {
            
            $scope.shoeList=res.data.shoes;
           console.log($scope.shoeList);
            
        }).catch(function(errorMsg){
            $scope.showError=true;
        });
        
    }]);
})();